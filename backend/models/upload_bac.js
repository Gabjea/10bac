const mongoose = require('../database/index')

const UploadBacSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    status: {
        type: String,
        required: true
    },
    sub_bac_id: {
        type: String,
        required: true
    },
    sub_bac_link: {
        type: String,
        required: true
    },
    owner_id:{
        type:String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UploadSubBac', UploadBacSchema)