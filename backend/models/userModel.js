const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    empid: {
        type: String,
        requiered: true
    },
    name: {
        type: String,
        required: true
    },
    age: Number,
    phone: Number
})

module.exports = User = mongoose.model('user',userSchema);