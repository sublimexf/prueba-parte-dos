const mongoose = require('mongoose')

const publisherSchema = new mongoose.Schema({
    publisher_id: {
        type: Number,
        require
    },
    publisher_name: {
        type: String,
        require
    }
})

module.exports = mongoose.model('publisher', publisherSchema, 'publisher')