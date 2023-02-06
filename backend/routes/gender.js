const express = require('express')
const router = express.Router()
const Genders = require('../models/gender')

router.get('/', async (req, res) => {
    try {
        const gender = await Genders.find()
        res.json(gender)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        Genders.findOne({ gender_id: req.params.id }, (err, gender) => {
            if (err) throw err
            res.status(200).json(gender)
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router