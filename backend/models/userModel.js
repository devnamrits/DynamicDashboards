const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: Number,
    phone: Number
})

module.exports = User = mongoose.model('user', userSchema);