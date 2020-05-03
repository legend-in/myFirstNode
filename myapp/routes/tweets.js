const express = require("express");
const router = express.Router();
const {getErrorHandler, getHandler} = require("./getHandler");
const postHandler = require("./postHandler");
const {putErrorHandler, putHandler} = require("./putHandler");
const {deleteErrorHandler, deleteHandler} = require("./deleteHandler");

// GET all the tweets
router.get("/", getErrorHandler, getHandler);

// POST a new tweet
router.post("/", postHandler);

// PUT a twwet
router.put("/:filename", putErrorHandler, putHandler);

// DELETE a tweet
router.delete("/:filename", deleteErrorHandler, deleteHandler);

module.exports = router;