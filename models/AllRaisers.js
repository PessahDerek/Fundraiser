const mongoose = require('mongoose');

const AllRaisers = new mongoose.Schema({
    title: {
        type: String,
        required: true  // user sends
    },
    img: {
        type: String,
        required: false  //user sends
    },
    description:{
        type: String  // user sends
    },
    owner: {
        type: String // filled on server
    },
    beneficiary: {
        type: []
    },
    contributors: {
        type: []  // added when someone contributes
    },
    total: {
        type: Number
    },
    target: {
        type: Number
    }
})

const AllRaisersSchema = mongoose.model("AllRaisers", AllRaisers);

module.exports = AllRaisersSchema;
