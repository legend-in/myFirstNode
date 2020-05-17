const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    author: { 
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    tutle: String
});

module.exports = mongoose.model("Blog", blogSchema);