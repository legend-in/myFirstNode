const express = require("express");
const passport = require("passport");

const Users = require("../models/users");

const router = express.Router();

router.get("/", (req, res, next) => {
	res.render("index");
});

router.get("/login", (req, res, next) => {
	res.render("login");
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
	res.redirect('/');
});

router.get("/signup", (req, res, next) => {
    res.render("signup");
});

router.post("/signup", (req, res, next) => {
	const { username, password, confirmPassword } = req.body;
	if (password === confirmPassword) {
		Users.register(new Users({
			name: username,
			username,
		}), password, (err, user) => {
			if (err) {
				return next (err);
			}
			passport.authenticate("local")(req, res, () => {
				return res.redirect("/");
			});
		});
	} else {
		return next({ message: "Password does not match" });
	}
});

router.get("/logout", (req, res, next) => {
	req.logout();
	res.redirect("/login");
});

module.exports = router;
