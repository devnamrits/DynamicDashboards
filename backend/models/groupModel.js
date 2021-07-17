const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
    },
    gname: {
        type: String,
        require: true,
    },
    users: [],
    apilist: []
})

module.exports = Group = mongoose.model('group', groupSchema);