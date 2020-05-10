const express = require("express");
const Tweets = require("../models/tweets");

const router = express.Router();

router.get("/", (req, res, next) => {
    // Tweets.insertMany({
    //     content: "Test",
    //     author: {
    //         name: "JJ",
    //         username: "legend"
    //     }
    // });
    Tweets.find({}, (err, tweets) => {
        res.render("index", { tweets });
    });
});

router.get("/login", (req, res, next) => {
    res.render("login");
});

router.get("/signup", (req, res, next) => {

    res.render("signup");
});

module.exports = router;
