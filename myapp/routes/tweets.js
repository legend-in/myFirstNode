var express = require("express");
var router = express.Router();

// GET tweets
router.get("/", (req, res, next) => {
    const tweets = {
        content1:  "tweet 1",
        content2: "tweet 2"
    };
    res.send(`GET a list of tweets: ${JSON.stringify(tweets)}`);
});

// POST a tweet
router.post("/new", (req, res, next) => {
    res.send(`You just POSTed a new tweet: ${req.body.content}`);
});

// DELETE a tweet
router.delete("")
router.delete("/:id/delete", (req, res, next) => {
    const tweetId = req.params.id;
    console.log(tweetId);
    res.send(`You just DELETEd a tweet with id ${tweetId}`);
});

module.exports = router;