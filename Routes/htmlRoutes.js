//path package
// const app = require("express").Router();

var path = require("path");

const notesPath = path.join(__dirname, "../public/notes.html");
const homePath = path.join(__dirname, "../public/index.html");


//routes to show html content when user visits a page
module.exports = app => {
    app.get("/notes", (req, res) => {
        res.sendFile(notesPath);
    });
    
    app.get("*", (req, res) => {
        res.sendFile(homePath);
    });
}

