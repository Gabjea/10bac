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
    owner: {
      _id: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: false
      },
      profile_pic: {
        type: String,
        required: false
      }
    },
    raspunsuri: [{
        _id: mongoose.Types.ObjectId,
        title:{
            type: String,
            required: true
        },
        owner:{
            _id: {
              type: String,
              required: true
            },
            username: {
                type: String,
                required: false
              },
            profile_pic: {
              type: String,
              required: true
            }
          }
    }],
  
})

module.exports = mongoose.model('Comment', CommentSchema)