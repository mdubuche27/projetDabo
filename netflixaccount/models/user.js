const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    actif: {
        type: Boolean,
        required: true
    }
})
module.exports = mongoose.model('User', UserSchema);