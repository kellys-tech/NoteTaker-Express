//path package
const app = require("express").Router();
var path = require("path");

//routes to show html content when user visits a page
module.exports = function(app) {
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/index.html"));
    });
}

