const mongoose = require('../database/index')

const NotaSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    owner_id: {
        type: String,
        required: true
    },
    test_id: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required:true
    }
})

module.exports = mongoose.model('Nota',NotaSchema)