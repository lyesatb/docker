const Ad = require('../models/ad');

const getAllAds = async (req, res) => {
    try {
        const ads = await Ad.find().populate('author', 'username');
        res.status(200).json(ads);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createAd = async (req, res) => {
    const { title, description, category, price } = req.body;
    try {
        const ad = new Ad({
            title,
            description,
            category,
            price,
            author: req.user.id,
        });
        await ad.save();
        res.status(201).json(ad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getAllAds, createAd };
