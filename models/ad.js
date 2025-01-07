const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Ad', adSchema);
