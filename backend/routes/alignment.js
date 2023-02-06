const express = require('express')
const router = express.Router()
const Alignments = require('../models/alignment')

router.get('/', async (req, res) => {
    try {
        const alignment = await Alignments.find()
        res.json(alignment)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        Alignments.findOne({ alignment_id: req.params.id }, (err, alignment) => {
            if (err) throw err
            res.status(200).json(alignment)
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router