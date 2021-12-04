const User = require("../../models/user");
const Quiz = require("../../models/quiz");
const Nota = require("../../models/nota");
const SubBac = require("../../models/sub_bac");
const UploadSubBac = require("../../models/upload_bac");
const mongoose = require("../../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("../../auth/passport");
const functions = require("../functions");
const jwtDecoder = require("jwt-decode");


const loginController = async (req, res) => {
  const { email, password } = req.body;

  const userWithEmail = await User.findOne({ email: email }).catch((err) => {
    console.log("Error: ", err);
  });

  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Email-ul sau parola sunt incorecte!" });

  bcrypt.compare(password, userWithEmail.password, function (err, result) {
    if (err || !result)
      return res
        .status(406)
        .json({ error: "Email-ul sau parola sunt incorecte!" });

    const jwtToken = functions.createAuthToken(userWithEmail._id)
    res.json({
      message: "Te-ai autentificat cu succes!",
      token: "Bearer " + jwtToken,
    });

  });
};

const registerController = async (req, res) => {
  const { name, surname, email, password } = req.body;
  const alreadyExistsUser = await User.findOne({ email: email })
    .exec()
    .catch((err) => {
      console.log("Error: ", err);
    });

  if (alreadyExistsUser) {
    return res.status(406).json({ message: "Acest email este deja folosit!" });
  }
  const passwordSalt = 10;
  bcrypt.hash(password, passwordSalt, async function (err, hashedPassword) {
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      surname,
      profile_pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      email,
      password: hashedPassword,
      role: "user",
    });
    const savedUser = await newUser.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Inregistrarea a esuat!" });
    });

    if (savedUser) {
      const jwtToken = functions.createAuthToken(savedUser._id)
      res.json({
        message: "Te-ai inregistrat cu succes",
        token: "Bearer " + jwtToken,
      });
    }
  });
};

const getUserProfileController = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1]
  res.send(await functions.getUserByIdFromToken(token));
};

const updateUserProfileController = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    await functions.updateUserProfile(token, req.body)
    res.status(200).json({ message: "Ti-ai actualizat profilul cu succes!" });

  } catch {
    res
      .status(406)
      .json({ error: "Actualizare nereusita!" });
  }
}

const uploadProfilePictureController = async (req, res) => {

  try {
    const token = req.headers.authorization.split(' ')[1]
    const user = await functions.getUserByIdFromToken(token)
    const path ='/uploads/icons/' + user._id + ".png"
    const file = await functions.uploadFile(req.files,path,'png')

    if (!file)
      res.send({
        status: false,
        message: 'Nicio poza nu a fost incarcata!'
      });
      else {
        await functions.updateUserProfile(token, { profile_pic: process.env.HOST + path })
        res.status(200).json({ message: "Ti-ai actualizat poza de profil cu succes!" })
      }

  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }
}

const getUploadedIcon = (req, res) => {

  res.sendFile(req.params.img, { root: './uploads/icons' })
}

const getUploadedSubBac = (req, res) => {
  res.sendFile(req.params.img, { root: './uploads/sub_bac' })
}

const getUserProfileFromIdController = async(req,res) => {
  const id = req.params.id
  res.send(await User.findById(id).catch(
    (err) => {
      console.log("Error: ", err);
    }
  ))
}


const getAllQuizes = (req,res ) => {
  Quiz.find({}, (err,quizes) =>{
    if (err) res.send(err)
    else res.send(quizes)
  })

}

const submitQuiz = (req,res) =>{
  const quiz_id = req.params.quiz_id
  const {answers} = req.body
  let points= 1
  const token = req.headers.authorization.split(' ')[1]
  const user_id = jwtDecoder(token).id
  Quiz.findById(quiz_id, async (err, findedQuiz) => {
    if (err) return res.send(err)
    for (let index = 0; index < findedQuiz.intrebari.length; index++) {
      const intrebare = findedQuiz.intrebari[index];

      
      if(intrebare.raspuns_corect === answers[index].answer)
        points++
    }
    const newNota = new Nota({
      _id: new mongoose.Types.ObjectId(),
      owner_id:user_id,
      test_id:quiz_id,
      nota: points,
      test_title: findedQuiz.name,
      date: new Date()
      
    });
    
    const savedNota = await newNota.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Incarcarea a esuat!" });
    });

    if(savedNota)
      res.status(200).json({message: `Ai luat nota ${points}`})
  })
  
}

const getAllNote = (req,res) =>{
  const token = req.headers.authorization.split(' ')[1]
  const user_id = jwtDecoder(token).id
  Nota.find({owner_id:user_id}, (err,quizes) =>{
    if (err) res.send(err)
    else res.send(quizes)
  })
} 

const getAllSubBac = (req,res) => {
  SubBac.find({}, (err,users) =>{
    if (err) res.send(err)
    else res.send(users)
  })
}

const submitSubBac = async(req,res) => {

  try {
    const sub_bac_id = req.params.id
    const token = req.headers.authorization.split(' ')[1]
    const user = await functions.getUserByIdFromToken(token)
    const path ='/uploads/sub_bac/' + sub_bac_id+user._id + ".jpg"
    const file = await functions.uploadFile(req.files,path,'jpg')

    if (!file)
      res.send({
        status: false,
        message: 'Nicio poza nu a fost incarcata!'
      });
      else {
        const sub_bac = await SubBac.findById(sub_bac_id)
        console.log(sub_bac)
        const newUploadSubBac = new UploadSubBac({
          _id: new mongoose.Types.ObjectId(),
          status: "pending",
          sub_bac_id,
          sub_bac_link: sub_bac.link,
          owner_id: user._id,
          link: process.env.HOST + path
        });
        
        const savedUploadSubBac = await newUploadSubBac.save().catch((err) => {
          console.log("Error: ", err);
          res.status(500).json({ error: "Incarcarea a esuat!" });
        });
    
        if(savedUploadSubBac)
          res.status(200).json({message: 'Ai incarcat subiectul cu succes'})
      
        
      }

  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }

}

module.exports = {
  loginController,
  registerController,
  getUserProfileController,
  updateUserProfileController,
  uploadProfilePictureController,
  getUploadedIcon,
  getUploadedSubBac,
  getUserProfileFromIdController,
  getAllQuizes,
  submitQuiz,
  getAllNote,
  getAllSubBac,
  submitSubBac
};
