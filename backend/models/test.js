const mongoose = require('../database/index')

const TestSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    materie_id: {
        type: Number,
        required: true
    },
    capitol_id: {
        type: Number,
        required: true
    },
    intrebari: [{
        nume:{
            type: String,
            required: true
        },
        raspunsuri: [
            {
                nume: {
                    type: String,
                    required: true
                }
            }
        ],
        raspuns_corect: {
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.model('Test', TestSchema)