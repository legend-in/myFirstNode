const express = require("express");
const tweets = require("../tweets");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("index", { tweets });
});

router.get("/login", (req, res, next) => {
    res.render("login");
});

router.get("/signup", (req, res, next) => {
    res.render("signup");
});

module.exports = router;
