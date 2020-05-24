const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
// const LocalStrategy  = require("passport-local").Strategy;
const session = require("express-session");

const Users = require("./models/users");
const Tweets = require('./models/tweets');

const config = require("./config");
mongoose.connect(config.mongodb.connection);

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger("dev"));

app.use(session({
    secret: "webdxd",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

app.locals.moment = require("moment");
const index = require("./routes/index");
const profile = require("./routes/profile");
const tweet = require("./routes/tweet");

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
app.use((req, res, next) => {
    Tweets.find({}).populate("author")
        .then((tweets) => {
            res.locals.tweets = tweets;
            next();
        }).catch(next);
});

app.use("/", index);
app.use("/profile", profile);
app.use("/tweet", tweet);

app.use((req, res, next) => {
	const err = new Error("Page Not Found");
    err.status = 404;
    next(err);
})
app.use((err, req, res, next) => {
    res.send(err.message);
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
