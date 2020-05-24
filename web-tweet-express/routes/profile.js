const express = require("express");
const utils = require("../utils");
const Users = require('../models/users');
const Tweets = require("../models/tweets");

const router = express.Router();
// router.get("/", (req, res, next) => {
//     res.render("profile");
// });

router.get("/*", utils.requireLogin, loadUserTweets);

router.get("/", utils.requireLogin, (req, res, next) => {
    res.render("profile");
});

// router.get("/edit", (req, res, next) => {
//     res.render("editProfile");
// });

router.get("/edit", utils.requireLogin, (req, res, next) => {
    res.render("editProfile");
});

router.post('/edit', utils.requireLogin, (req, res) => {
    Users.update({ _id: req.user._id }, req.body, (err) => {
        if(err) {
            return next(err);
        } else {
            return res.redirect('/profile');
        }
    });
});

router.post('/avatar', utils.requireLogin, (req, res) => {
    Users.update({ _id: req.user._id }, req.body, (err) => {
        if(err) {
            return next(err);
        } else {
            return res.json({ success: true })
        }
    });
});

function loadUserTweets(req, res, next) {
    Tweets.find({ author: req.user._id }).populate("author")
		.then((userTweets) => {
			res.locals.userTweets = userTweets;
            // console.log(res.locals.userTweets);
            next();
        }).catch(next);
}

module.exports = router;