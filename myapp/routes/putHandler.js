const express = require("express");
const path = require('path');
const fs = require("fs");

// put callback handler for response with updated content, asynchronously update the file
const putHandler = (req, res, next) => {
    const dataPath = path.join(__dirname, "../data");
    const filename = req.params.filename;
    const pathToFile = path.join(dataPath, `${filename}.json`);
    const newContent = req.body.content;
    console.log(`New content: ${newContent}`);
    const jsonString = JSON.stringify(newContent);
    fs.writeFile(pathToFile, jsonString, (err) => {
        if (err) {
            throw err;
        }
        console.log("Updated!");
    });
    res.status(200).send(`Your tweet has been updated: ${jsonString}`);
}

// error handler for no such content
const putErrorHandler = (req, res, next) => {
    const dataPath = path.join(__dirname, "../data");
    const filename = req.params.filename;
    const pathToFile = path.join(dataPath, `${filename}.json`);
    console.log(`Reading file: ${pathToFile}`);
    if (!fs.existsSync(pathToFile)) {
        res.status(404).send(`Tweet with id ${filename} does not exits.`);
    } else {
        next();
    }
};



module.exports = {putHandler, putErrorHandler};