const express = require('express')
const router = express.Router()
const Publishers = require('../models/publisher')

router.get('/', async (req, res) => {
    try {
        const publishers = await Publishers.find()
        res.json(publishers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        Publishers.findOne({ publisher_id: req.params.id }, (err, publisher) => {
            if (err) throw err
            res.status(200).json(publisher)
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router