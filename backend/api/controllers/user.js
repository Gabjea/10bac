const User = require("../../models/user");
const mongoose = require("../../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("../../auth/passport");
const functions = require("../functions");


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

  res.sendFile(req.params.img, { root: './uploads/subs_bac' })
}

module.exports = {
  loginController,
  registerController,
  getUserProfileController,
  updateUserProfileController,
  uploadProfilePictureController,
  getUploadedIcon,
  getUploadedSubBac
};
