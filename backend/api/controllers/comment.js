const User = require("../../models/user");
const Comment = require("../../models/comment");

const mongoose = require("../../database");


const createComment = async(req,res ) => {
  const {lectie_id,title,owner_id,raspunsuri} = req.body
  const newComment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    lectie_id,
    title,
    owner_id,
    raspunsuri
    
  });
  const savedComment = await newComment.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Comentariul nu a putut fi adaugat!" });
  });

  if (savedComment) res.json({ message: "Comentariul a fost adaugat cu succes!" });

}

const getAllCommentsFromLesson = (req,res ) => {
    const id = req.params.lectie
  Comment.find({lectie_id:id}, (err,comments) =>{
    if (err) res.send(err)
    else res.send(comments)
  })

}

const deleteComment = (req, res) => {
  const id = req.params.id
  console.log(id)
  Comment.findOneAndDelete({_id:id},(err,result)=> {
    if (err) res.send(500).json({err: err})
    res.status(200).json({message: "Comentariul a fost sters cu succes!"})
  })
}

module.exports = {
    createComment,
    getAllCommentsFromLesson,
    deleteComment
}