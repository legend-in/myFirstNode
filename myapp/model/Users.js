const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {type: String, required: Boolean},
    username: {type: String, required: Boolean},
    location: String,
    Bio: String,
    avatarUrl: {Type: String, default: "http://www.abc.xyz"}
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;