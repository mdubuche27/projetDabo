const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SerieSchema = new Schema({
    titre: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    episodes: {
        type: [Number]
    },
    categories: {
        type: [String],
    },
    posters: {
        type: [{
            name: String,
            url: String,
            time: String
        }]
    }
})

module.exports = mongoose.model('Serie', SerieSchema);