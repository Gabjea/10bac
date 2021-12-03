const User = require("../../models/user");
const mongoose = require("../../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require('../../auth/passport');
const functions =  require('../functions')

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
    const jwtToken = jwt.sign(
      { id: userWithEmail._id, email: userWithEmail.email },
      process.env.JWT_SECRET,
      {}
    );
    res
      .cookie("authtoken","Bearer " + jwtToken)
      .json({ message: "Ai fost authetificat cu succes" });
  });
};

const registerController = async (req, res) => {
  const { name,surname, email, password } = req.body;
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
      profile_pic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      email,
      password: hashedPassword,
      role: "user",
    });
    const savedUser = await newUser.save().catch((err) => {
      console.log("Error: ", err);  
      res.status(500).json({ error: "Inregistrarea a esuat!" });
    });

    if (savedUser) res.json({ message: "Te-ai inregistrat cu succes" });
  });
};

const getUserProfileController =async(req, res) => {
    
    res.send(await functions.getUserByIdFromToken(req.cookies.authtoken))
    
   
    }

module.exports = {
  loginController,
  registerController,
  getUserProfileController
};
