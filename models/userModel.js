const mongoose = require('mongoose');

const user = new mongoose.Schema({
    contact: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fundRaiserKey: {
        type: String,
        required: true
    },
    keyForInvited: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("users", user);

module.exports = userModel;