const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
    titre: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    duree: {
        type: Number,
        required: true
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
module.exports = mongoose.model('Movie', MovieSchema);