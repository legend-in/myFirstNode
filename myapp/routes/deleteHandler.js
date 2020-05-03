const express = require("express");
const path = require('path');
const fs = require("fs");

// delete callback handler for response with deleleted content's id, asynchronously remove the file
const deleteHandler = (req, res, next) => {
    const dataPath = path.join(__dirname, "../data");
    const filename = req.params.filename;
    const pathToFile = path.join(dataPath, `${filename}.json`);
    fs.unlink(pathToFile, (err) => {
        if (err) {
            throw err;
        }
        console.log("Deleted!");
    });
    res.status(200).send(`Your tweet with id: ${filename} been deleted.`);
}

// error handler for no such content
const deleteErrorHandler = (req, res, next) => {
    const dataPath = path.join(__dirname, "../data");
    const filename = req.params.filename;
    const pathToFile = path.join(dataPath, `${filename}.json`);
    console.log(`Finding file: ${pathToFile}`);
    if (!fs.existsSync(pathToFile)) {
        res.status(404).send(`Tweet with id ${filename} does not exits.`);
    } else {
        next();
    }
};



module.exports = {deleteHandler, deleteErrorHandler};