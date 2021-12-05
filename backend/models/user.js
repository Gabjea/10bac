const mongoose = require('../database/index')

const UserSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    subscription: {
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model('User', UserSchema)