const User = require("../../models/user");
const Quiz = require("../../models/quiz");
const SubBac = require("../../models/sub_bac");
const UploadSubBac = require('../../models/upload_bac')
const Event = require('../../models/event')
const Nota = require('../../models/nota')
const mongoose = require("../../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require('../../auth/passport');
const functions = require('../functions');
const getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.send(err)
    else res.send(users)
  })
}

const createQuiz = async (req, res) => {
  const { materie_id, capitol_id, intrebari, name } = req.body
  const newQuiz = new Quiz({
    _id: new mongoose.Types.ObjectId(),
    materie_id,
    capitol_id,
    intrebari,
    name: name,
  });
  const savedQuiz = await newQuiz.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Testul grila nu a putut fi adaugat!" });
  });

  if (savedQuiz) res.json({ message: "Testul grila a fost adaugat cu succes!" });

}
const updateQuiz = async (req, res) => {
  try {

    await functions.updateQuiz(req.body)
    res.status(200).json({ message: "Ai actualizat testul grila cu succes!" });

  } catch {
    res
      .status(406)
      .json({ error: "Actualizare nereusita!" });
  }

}


const createSubBac = async (req, res) => {

  try {
    const { materie_id, name, link } = req.body
    const newSubBac = new SubBac({

      _id: new mongoose.Types.ObjectId(),
      materie_id,
      name,
      link
    });

    const savedSubBac = await newSubBac.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Subiectul de bac nu a putut fi adaugat!" });
    });

    if (savedSubBac) res.json({ message: "Subiectul de bac a fost adaugat cu succes!" });


  } catch (error) {
    res.status(500).send(error)
  }
}


const getAllQuizes = (req, res) => {
  Quiz.find({}, (err, quizes) => {
    if (err) res.send(err)
    else res.send(quizes)
  })

}

const deleteQuiz = (req, res) => {
  const { id } = req.body
  Quiz.findOneAndDelete({ _id: id }, (err, result) => {
    if (err) res.send(500).json({ err: err })
    res.status(200).json({ message: "Testul grila a fost sters cu succes!" })
  })

}

const getAllSubBac = (req, res) => {
  SubBac.find({}, (err, users) => {
    if (err) res.send(err)
    else res.send(users)
  })
}

const deleteSubBac = (req, res) => {
  const id = req.params.id
  SubBac.findOneAndDelete({ _id: id }, (err, result) => {
    if (err) res.send(500).json({ err: err })
    res.status(200).json({ message: "Subiectul a fost sters cu succes!" })
  })
}

const getPendingSubsBac = async (req, res) => {
  UploadSubBac.find({ status: 'pending' }, (err, users) => {
    if (err) res.send(err)
    else res.send(users)
  })
}

const createEvent = async (req, res) => {
  const { title, link, date } = req.body
  const newEvent = new Event({
    _id: new mongoose.Types.ObjectId(),
    title,
    link,
    date
  });

  const savedEvent = await newEvent.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Evenimentul nu a putut fi adaugat!" });
  });

  if (savedEvent) res.json({ message: "Evenimentul a fost adaugat cu succes!" });

}

const deleteEvent = (req, res) => {
  //await Event.findByIdAndDelete()
}

const giveUserGrade = async (req, res) => {
  const uploadedSub_id = req.params.id
  const {nota} = req.body
  const token = req.headers.authorization.split(' ')[1]
  const user = await functions.getUserByIdFromToken(token)
  
  UploadSubBac.findById(uploadedSub_id, async (err, findedUploadedSubBac) => {
    if (err) return res.send(err)
    
    const findedSubBac = await SubBac.findById(findedUploadedSubBac.sub_bac_id)

    const newNota = new Nota({
      _id: new mongoose.Types.ObjectId(),
      owner_id: user._id,
      test_id: uploadedSub_id,
      nota,
      test_title: findedSubBac.name,
      date: new Date()

    });

    const savedNota = await newNota.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Incarcarea a esuat!" });
    });

    if (savedNota)
      res.status(200).json({ message: `Ai luat nota ${nota}` })

    await UploadSubBac.findByIdAndUpdate(uploadedSub_id,{status:'closed'})
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
  deleteSubBac,
  getPendingSubsBac,
  createEvent,
  deleteEvent,
  giveUserGrade
}