//link routes to data source
let database = require("../db/db.json");
var notes = require("../public/assets/js/index");
var path = require("path");
const fs = require("fs");
let array = [];
const {v4:uuidv4} = require("uuid");

//Routes
//GET request
module.exports = app => { 
    app.get("/api/notes", (req, res) => {
        fs.readFile("../db/db.json", (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                newArray = JSON.parse(data)
                res.json(newArr);
            }    
        });
        res.json(notes);
    });

//POST request with creating UUID
    app.post("/api/notes", (req, res) => {
        const uuid = uuidv4();
        fs.writeFile('db.json', json, 'utf8', )
        res.json(notes);
    });

//DELETE request using UUID
    app.delete("/api/notes/:id", (req, res) => {
        res.json(notes);
    });
}