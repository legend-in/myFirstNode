const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
mongoose.connect();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger("dev"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.locals.moment = require("moment");
const index = require("./routes/index");
const profile = require("./routes/profile");

app.use("/", index);
app.use("/profile", profile);

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