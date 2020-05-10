const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
    content: String,
    imageUrl: String,
    body: String,
    author: {
        name: String,
        username: String,
        location: String,
        avatarUrl: String,
        Bio: String
    },
    createdAt: {Type: Date, default: Date.now}
});

module.exports = mongoose.model("Tweet", tweetSchema);