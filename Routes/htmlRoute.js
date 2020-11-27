//path package
var path = require("path");


//routes to show html content when user visits a page
module.exports = function(app) {
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/js/notes.html"));
    });
    
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/assets/js/index.html"));
    });
}