const mongoose = require('mongoose');

// cluster to store all stored invites
const allInvites = new mongoose.Schema({
    invitedRaisers: {
        type: []
    }
})

const inviteCluster = mongoose.model("InvitedRaisers", allInvites);

module.exports = inviteCluster;
