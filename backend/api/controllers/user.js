const User = require('../../models/user')
const mongoose = require("../../database")
const bcrypt = require('bcrypt');
const loginController = async (req,res ) => {


}

const registerController = async (req,res ) => {
    const { username,email,password} = req.body;
    const alreadyExistsUser = await User.findOne({ email : email }).exec().catch(
        (err) => {
          console.log("Error: ", err);
        }
      );
    
    if (alreadyExistsUser) {
        return res.status(406).json({ message: "Acest email este deja folosit!" });
      }
    const passwordSalt = 10
    bcrypt.hash(password, passwordSalt , async function(err, hashedPassword) {
        
        const newUser = new User({_id: new mongoose.Types.ObjectId ,username,email,password:hashedPassword, role:"user" });
        const savedUser = await newUser.save().catch((err) => {
            console.log("Error: ", err);
            res.status(500).json({ error: "Inregistrarea a esuat!" });
        });
  
        if (savedUser) res.json({ message: "Te-ai inregistrat cu succes" });
    });
    
}

module.exports = {
    loginController,
    registerController

}