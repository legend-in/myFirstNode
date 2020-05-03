const express = require("express");
const path = require('path');
const fs = require("fs");

// get callback handler for response with all tweets' content under /data folder
const getHandler = (req, res, next) => {
    const dataPath = path.join(__dirname, "../data");
    const tweets = []; 
    fs.readdir(dataPath, (err, files) => {
        files.forEach((file) => {
            const filePath = path.join(dataPath, file);
            let content = JSON.parse(fs.readFileSync(filePath));
            tweets.push(content.content);
        });
        res.status(200).json({tweets});
    });
}

// error handler for no data in the folder
const getErrorHandler = (req, res, next) => {
    const dataPath = path.join(__dirname, "../data");
    console.log(`Reading dir: ${dataPath}`);
    fs.readdir(dataPath, (err, files) => {
        if (files.length === 0) {
            res.status(404).send(`There is no data under ${dataPath} directory`);
        } else {
            next();
        }
    });
};

module.exports = {getErrorHandler, getHandler};