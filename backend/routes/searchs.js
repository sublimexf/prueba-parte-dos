const express = require('express')
const router = express.Router()
const Publisher = require('../models/publisher')
const Gender = require('../models/gender')
const Alignment = require('../models/alignment')
const getHeroesData = require('./getHeroesData')

router.get('/publisher', getSearchValueID, async (req, res) => {
    const heroes = await getHeroesData({ publisher_id: res.ans.publisher_id })
    res.json(heroes)
})

router.get('/gender', getSearchValueID, async (req, res) => {
    const heroes = await getHeroesData({ gender_id: res.ans.gender_id })
    res.json(heroes)
})

router.get('/alignment', getSearchValueID, async (req, res) => {
    const heroes = await getHeroesData({ alignment_id: res.ans.alignment_id })
    res.json(heroes)
})

router.get('/race',  async (req, res) => {
    const search_value = req.query.search_value.replace("&", " ")
    const regex = { $regex : new RegExp(`^${search_value}$`, 'i') }
    const heroes = await getHeroesData({ race: regex })
    res.json(heroes)
})

async function getSearchValueID(req, res, next) {
    let ans
    const typeOfSearch = req.originalUrl.split('/')[2].split('?')[0]
    const search_value = req.query.search_value.replace("&", " ")
    const regex = { $regex : new RegExp(`^${search_value}$`, 'i') }

    try {
        switch (typeOfSearch) {
            case "publisher":
                ans = await Publisher.findOne({ "publisher_name": regex  })
                break;
            case "gender":
                ans = await Gender.findOne({ "name": regex })
                break;
            case "alignment":
                ans = await Alignment.findOne({ "name": regex })
                break;
        }

        if (ans == null)
            return res.status(404).json({ message: 'Does not exist' })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.ans = ans
    next()
}

router.get('/publishers', async (req, res) => {
    res.send(req.body)
})



module.exports = router