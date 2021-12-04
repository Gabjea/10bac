const User = require("../../models/user");
const Quiz = require("../../models/quiz");
const SubBac = require("../../models/sub_bac");
const mongoose = require("../../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require('../../auth/passport');
const functions =  require('../functions');
const getAllUsers = (req,res)=>{
    User.find({}, (err,users) =>{
      if (err) res.send(err)
      else res.send(users)
    })
  }

const createQuiz = async(req,res ) => {
  const {materie_id,capitol_id,intrebari} = req.body
  const newQuiz = new Quiz({
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
const updateQuiz = async(req,res ) => {
  try{
   
    await functions.updateQuiz(req.body)
    res.status(200).json({ message: "Ai actualizat testul grila cu succes!" });

  }catch{
    res
      .status(406)
      .json({ error: "Actualizare nereusita!" });
  }

}


const createSubBac = async(req,res ) => {
  
  try {
    const {materie_id, name} = req.body
    const newSubBac = new SubBac({
      
      _id: new mongoose.Types.ObjectId(),
      materie_id:materie_id,
      name: name
    });

    const path = '/uploads/subs_bac/' + newSubBac._id + ".pdf"
    newSubBac.link = process.env.HOST + path
    const file = await functions.uploadFile(req.files,path,'pdf')
    if(file){

      const savedSubBac = await newSubBac.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Subiectul de bac nu a putut fi adaugat!" });
      });
    
      if (savedSubBac) res.json({ message: "Subiectul de bac a fost adaugat cu succes!" });
    }

  } catch (error) {
    res.status(500).json(error);
  }

}

const updateSubBac = (req,res ) => {
  

}

const getAllQuizes = (req,res ) => {
  Quiz.find({}, (err,quizes) =>{
    if (err) res.send(err)
    else res.send(quizes)
  })

}

const deleteQuiz = (req,res) => {
  const {id} = req.body
  Quiz.findOneAndDelete({_id:id},(err,result)=> {
    if (err) res.send(500).json({err: err})
    res.status(200).json({message: "Testul grila a fost sters cu succes!"})
  })
  
}

const getAllSubBac = (req,res) => {
  SubBac.find({}, (err,users) =>{
    if (err) res.send(err)
    else res.send(users)
  })
}

const deleteSubBac = (req, res) => {
  const {id} = req.body
  SubBac.findOneAndDelete({_id:id},(err,result)=> {
    if (err) res.send(500).json({err: err})
    res.status(200).json({message: "Subiectul a fost sters cu succes!"})
  })
}

module.exports = {
    getAllUsers,
    createQuiz,
    updateQuiz,
    getAllQuizes,
    deleteQuiz,
    createSubBac,
    getAllSubBac,
    deleteSubBac
}