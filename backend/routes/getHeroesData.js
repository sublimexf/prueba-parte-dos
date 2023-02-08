const Heroes = require('../models/heores')

module.exports = async function getHeroesData(match) {
    return await Heroes.aggregate([
        { $match: match ? match : {}  },
        {
            $lookup: {
                from: 'publisher',
                let: { hero_pub_id: '$publisher_id' },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $and:
                                    [
                                        { $eq: ["$publisher_id", "$$hero_pub_id"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "publisher"
            }
        },
        {
            $lookup: {
                from: 'alignment',
                let: { hero_ali_id: '$alignment_id' },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $and:
                                    [
                                        { $eq: ["$alignment_id", "$$hero_ali_id"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "alignment"
            }
        },
        {
            $lookup: {
                from: 'gender',
                let: { hero_gen_id: '$gender_id' },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $and:
                                    [
                                        { $eq: ["$gender_id", "$$hero_gen_id"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "gender"
            }
        }

    ])
}