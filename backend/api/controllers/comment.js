const User = require("../../models/user");
const Comment = require("../../models/comment");

const mongoose = require("../../database");
const jwtDecoder = require("jwt-decode");

const createComment = async (req, res) => {
    const { lectie_id, title } = req.body
    const token = req.headers.authorization.split(' ')[1]
    const id = jwtDecoder(token).id
    const newComment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        lectie_id,
        title,
    });

    User.findById(id, async (err, result) => {
        if (err) res.send(err)
        newComment.owner._id = id
        newComment.owner.username = result.name + " " + result.surname
        newComment.owner.profile_pic = result.profile_pic
        const savedComment = await newComment.save().catch((err) => {
            console.log("Error: ", err);
            res.status(500).json({ error: "Comentariul nu a putut fi adaugat!" });
        });

        if (savedComment) res.json({ message: "Comentariul a fost adaugat cu succes!" });
    })


}

const getAllCommentsFromLesson = (req, res) => {
    const id = req.params.lectie
    Comment.find({ lectie_id: id }, (err, comments) => {
        if (err) res.send(err)
        else res.send(comments)
    })

}

const deleteComment = (req, res) => {
    const id = req.params.id
    console.log(id)
    Comment.findOneAndDelete({ _id: id }, (err, result) => {
        if (err) return res.send(500).json({ err: err })
        return res.status(200).json({ message: "Comentariul a fost sters cu succes!" })
    })
}

const addReplyToComment = (req, res) => {
    const comment_id = req.params.comment_id
    const { title } = req.body
    const token = req.headers.authorization.split(' ')[1]
    const user_id = jwtDecoder(token).id

    User.findById(user_id, async (err, findedUser) => {
        if (err) return res.send(err)

        const current_comment = await Comment.findById(comment_id)
        console.log(current_comment.raspunsuri)
        const newReplyArray = current_comment.raspunsuri
        newReplyArray.push({
            title,
            owner: {
                _id: user_id,
                username: findedUser.name + " " + findedUser.surname,
                profile_pic: findedUser.profile_pic,
            }
        })
    
    await Comment.findOneAndUpdate({ _id: comment_id }, {
        raspunsuri: newReplyArray

    },{new: true}, (err, result) => {
        if (err) return res.send(err)
        return res.send(result)
    })


})

}

module.exports = {
    createComment,
    getAllCommentsFromLesson,
    deleteComment,
    addReplyToComment
}