//link routes to data source
const fs = require("fs");
const path = require("path");

const {v4:uuidv4} = require("uuid");

const dbPath = path.join(__dirname, "../db/db.json");
let notes = [];


//Routes
//GET request
module.exports = app => { 
    app.get("/api/notes", (req, res) => {
        fs.readFile(dbPath, (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                notes = JSON.parse(data)
                res.json(notes);
            }    
        })
    });

//POST request with creating UUID
    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        const uuid = uuidv4();
        newNote.uuid = uuid;
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                notes = JSON.parse(data);
                notes.push(newNote);
                const newNote = JSON.stringify(notes);
                fs.writeFile(dbPath, newNote, err => err ? console.log(err) : console.log("Updated Note"))
            }
        })
        res.json(newNote);
    });

//DELETE request using UUID
    app.delete("/api/notes/:id", (req, res) => {
        const id = req.params.uuid;
        fs.readFile(dbPath, "utf8", (err, data)=> {
            if (err) {
                console.log(err);
            }
            else {
                arrayNotes = JSON.parse(data);
                const updateNotes = arrayNotes.filter(notes => notes.id !=id);
                const updateNotesObj = JSON.stringify(updatesNotes);
                fs.writeFile(dbPath, updatesNotesObj, err => err ? console.log(error): console.log("Updated db.json"));
                return res.json(notes);
            }
        })
    });
}