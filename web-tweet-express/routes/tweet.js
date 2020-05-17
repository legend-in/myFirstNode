const express = require("express");
const utils = require("../utils");
const Tweets = require("../models/tweets");
const passport = require("passport");

const router = express.Router();

router.get("/", utils.requireLogin, (req, res, next) => {
    Tweets.find({_id: req.user._id})
        .then((tweets) => {
            return res.render("profile", { tweets });
        }).catch(next(err));
});

router.post("/", utils.requireLogin, (req, res, next) => {
    const { content } = req.body;
    console.log(content);
    const tweet = new Tweets({
        content,
        author: req.user._id
    });
    console.log(tweet);
    tweet.save()
        .then(() => {
            return res.redirect('/profile');
        }).catch(next(err))
});

module.exports = router;
