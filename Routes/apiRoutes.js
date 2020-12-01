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
        //res.send("works");
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
       
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                let newNote = req.body;
                const uuid = uuidv4();
                newNote.id = uuid;
                notes = JSON.parse(data);
                notes.push(newNote);
                //const newNote = JSON.stringify(notes);
                fs.writeFile(dbPath, JSON.stringify(notes), err => err ? console.log(err) : console.log("Updated Note"))
                res.json(newNote);
            }
        })
       
    });

//DELETE request using UUID
    app.delete("/api/notes/:id", (req, res) => {
        //const id = req.params.id;
        fs.readFile(dbPath, "utf8", (err, data)=> {
            if (err) {
                console.log(err);
            }
            else {
                arrayNotes = JSON.parse(data);
                console.log(req.params.id);
                let updateNotes = arrayNotes.filter(notes =>{ 
                    return notes.id !=req.params.id});
                console.log(updateNotes);
                //const updateNotesObj = ;
                fs.writeFile(dbPath, JSON.stringify(updateNotes), err => err ? console.log(error): console.log("delete db.json"));
                return res.json(notes);
            }
        })
    });
}