const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: String,
    body: String,
    comments: [{body: String, data: Data}],
    data: {type: Data, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

module.exports = BlogSchema;