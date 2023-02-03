const express = require('express')
const router = express.Router()
const Heroes = require('../models/heores')

router.get('/', async (req, res) => {
    try {
        const heroes = await Heroes.find()
        res.json(heroes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const heroe = new Heroes({
        hero_id: 1,
        name: "hero1",
        publisher_id: 1
    })
    try {
        const newHeroe = await heroe.save()
        res.status(201).json(newHeroe)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/:id', getHeroe, async (req, res) => {
    if (req.body.name != null) {
        res.heroe.name = req.body.name
    }

    try {
        const updatedHeroe = await res.heroe.save()
        res.json(updatedHeroe)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getHeroe, async (req, res) => {
    try {
        await res.heroe.remove()
        res.json({ message: 'Deleted heroe' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getHeroe(req, res, next) {
    let heroe
    try {
        heroe = await Heroes.findById(req.params.id)
        if (heroe == null)
            return res.status(404).json({ message: 'Cannot find suscriber' })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.heroe = heroe
    next()
}

module.exports = router