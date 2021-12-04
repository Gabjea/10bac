const mongoose = require('../database/index')

const CommentSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    lectie_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required:true
    },
    owner_id: {
        type: String,
        required: true
    },
    raspunsuri: [{
        title:{
            type: String,
            required: true
        },
        owner_id: {
            type: String,
            required: true
        }
    }],
  
})

module.exports = mongoose.model('Comment', CommentSchema)