const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs");

/* GET home page. */
router.get('/', (req, res, next) => {
  const pathToJson = path.join(__dirname, "../data/books.json");
  const jsonFile = fs.readFileSync(pathToJson);
  const jsonObject = {};
  jsonObject.books = JSON.parse(jsonFile);
  jsonObject.title = "Exercise #3.1";
  res.render('index', jsonObject);
});

module.exports = router;