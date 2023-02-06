const mongoose = require('mongoose')

const genderSchema = new mongoose.Schema({
    gender_id: {
        type: Number,
        require
    },
    name : {
        type: String
    }
})

module.exports = mongoose.model('gender', genderSchema, 'gender')