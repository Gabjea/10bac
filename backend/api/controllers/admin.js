const User = require("../../models/user");
const Test = require("../../models/test");
const mongoose = require("../../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require('../../auth/passport');
const functions =  require('../functions');
const { createCallExpression } = require("@vue/compiler-core");

const getAllUsers = (req,res)=>{
    User.find({}, (err,users) =>{
      if (err) res.send(err)
      else res.send(users)
    })
  }

const createQuiz = async(req,res ) => {
  const {materie_id,capitol_id,intrebari} = req.body
  const newQuiz = new Test({
    _id: new mongoose.Types.ObjectId(),
    materie_id:materie_id,
    capitol_id:capitol_id,
    intrebari: intrebari,
    
  });
  const savedQuiz = await newQuiz.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Testul grila nu a putut fi adaugat!" });
  });

  if (savedQuiz) res.json({ message: "Testul grila a fost adaugat cu succes!" });



}

const createSubBac = (req,res ) => {
  

}

module.exports = {
    getAllUsers,
    createQuiz,
    createSubBac
}