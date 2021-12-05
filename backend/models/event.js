const mongoose = require('../database/index')

const EventSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required:true
    }
})

module.exports = mongoose.model('Event',EventSchema)