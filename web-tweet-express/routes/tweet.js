const express = require("express");
const utils = require("../utils");
const passport = require("passport");

const Tweets = require("../models/tweets");
const Users = require("../models/users");

const router = express.Router();

router.post("/", utils.requireLogin, (req, res, next) => {
    const { content, pathname } = req.body;
    const tweet = new Tweets({
        content,
        author: req.user._id
    });
    console.log(tweet);
    tweet.save()
        .then(() => {
            return res.redirect(pathname);
        }).catch(next);
});

router.delete("/:id", utils.requireLogin, (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    Tweets.find({_id: id}).remove()
        .then(() => {
            return res.redirect(pathname);
        }).catch(next);
});

module.exports = router;
