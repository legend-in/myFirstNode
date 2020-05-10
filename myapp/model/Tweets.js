const mongoose = require("mongoose");

const tweetsSchema = new mongoose.Schema({
    content: {type: String, required: Boolean},
    ImageUrl: String,
    // author: {
    //     name: {type: String, required: Boolean},
    //     username: {type: String, required: Boolean},
    //     location: String,
    //     Bio: String,
    //     avatarUrl: {Type: String, default: "http://www.abc.xyz"}
    // },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: Boolean
    },
    createdAt: {Type: Date, default: Date.now, required: Boolean}
   
});

const Tweets = mongoose.model("Tweets", tweetsSchema);

module.exports = Tweets;