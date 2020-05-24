const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    location: String,
    bio: String,
    avatarUrl: {
        type: String,
        default: "/img/webdxd.png"
    }
    // tweets: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Tweets"
    // }]
});

UsersSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Users", UsersSchema);
