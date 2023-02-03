const mongoose = require('mongoose')


const heroesSchema = new mongoose.Schema({
    hero_id: {
        type: Number,
        require
    },
    name: {
        type: String,
        require
    },
    eye_color: {
        type: String
    },
    hair_color: {
        type: String
    },
    skin_color: {
        type: String
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    race: {
        type: String
    },
    publisher_id:{
        type: Number,
        require 
    },
    gender_id: {
        type: Number
    },
    alignment_id: {
        type: Number
    }
})

module.exports = mongoose.model('Heroes', heroesSchema)