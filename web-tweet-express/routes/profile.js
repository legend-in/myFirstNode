const express = require("express");
const utils = require("../utils");
const Users = require('../models/users');

const router = express.Router();

// router.get("/", (req, res, next) => {
//     res.render("profile");
// });

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
            return res.redirect('/profile')
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

module.exports = router;