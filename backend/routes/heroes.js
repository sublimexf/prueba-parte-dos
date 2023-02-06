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
    const hero = new Heroes(req.body)
    try {
        const newHero = await hero.save()
        res.status(201).json(newHero)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// 
router.patch('/:id', getHeroe, async (req, res) => {
    const hero = new Heroes(req.body)
    for (const key in req.body) {
        if (hero[key] !== null)
            res.hero[key] = hero[key]
    }

    try {
        const updatedHero = await res.hero.save()
        res.json(updatedHero)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getHeroe, async (req, res) => {
    try {
        await res.hero.remove()
        res.json({ message: 'Deleted hero' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getHeroe(req, res, next) {
    let hero
    try {
        hero = await Heroes.findById(req.params.id)
        if (hero == null)
            return res.status(404).json({ message: 'Cannot find hero' })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.hero = hero
    next()
}

module.exports = router