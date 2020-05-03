const express = require("express");
const path = require('path');
const fs = require("fs");
const createUUID = require("../../createUUID");

// get callback handler for response with all tweets' content under /data folder
const postHandler = (req, res, next) => {
    const dataPath = path.join(__dirname, "../data");
    const UUID = createUUID();
    const content = {
        id: UUID
    }
    content.content = req.body.content;
    console.log(`Posting a tweet with content: ${JSON.stringify(content)}`);
    const pathToFile = path.join(dataPath, `${UUID}.json`);
    console.log(`Saving: ${pathToFile}`);
    const jsonString = JSON.stringify(content);
    fs.writeFile(pathToFile, jsonString, (err) => {
        if (err) {
            throw err;
        }
        console.log("Saved!");
    });
    res.status(201).send(`Your tweet has been posted: ${jsonString}`);
}

module.exports = postHandler;