const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs");

/* GET home page. */
router.get('/', (req, res, next) => {
  const pathToJson = path.join(__dirname, "../data/books.json");
  const jsonFile = fs.readFileSync(pathToJson);
  res.render('index', {books: JSON.parse(jsonFile), title: "Exercise #3.1"});
});

module.exports = router;