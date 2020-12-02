//path package
var path = require("path");

//set path for notes and home pages
const notesPath = path.join(__dirname, "../public/notes.html");
const homePath = path.join(__dirname, "../public/index.html");


//Get requests to show html content when user visits a page and if no matching route is found
module.exports = app => {
    app.get("/notes", (req, res) => {
        res.sendFile(notesPath);
    });
    app.get("/", (req, res) => {
        res.sendFile(homePath);
    });
}

