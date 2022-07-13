const mongoose = require("mongoose");

// cluster that stores all fundraisers
const fundraisers = new mongoose.Schema({
    fundraiser: {
        type: []
    }
})


const fundraiserCluster = mongoose.model("AllFundRaisers", fundraisers);

module.exports = fundraiserCluster;
