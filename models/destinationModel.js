const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
    rank: { type: Number, default: 0 }
});

module.exports = mongoose.model('Destination', destinationSchema);
