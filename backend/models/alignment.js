const mongoose = require('mongoose')

const alignmentSchema = new mongoose.Schema({
    alignment_id: {
        type: Number,
        require
    },
    name : {
        type: String
    }
})

module.exports = mongoose.model('alignment', alignmentSchema, 'alignment')