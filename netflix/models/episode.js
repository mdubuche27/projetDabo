const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EpisodeSchema = new Schema({
    number: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    serie: {
        type: String,
        required: true
    },
    duree: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('Episode', EpisodeSchema);