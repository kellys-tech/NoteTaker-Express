//import modules to be used
const fs = require("fs");
const path = require("path");

//package to create a unique ids for each note
const {v4:uuidv4} = require("uuid");

//path to db.json where notes are going to be saved
const dbPath = path.join(__dirname, "../db/db.json");

//empty array to store notes to be pushed to json file
let notes = [];


//module to export to the server
module.exports = app => { 
    //GET Request
    app.get("/api/notes", (req, res) => {
        //read json file
        fs.readFile(dbPath, (err, data) => {
            //show error if json file cannot be read
            if (err) {
                console.log(err)
            }
            //else show json file contents
            else {
                notes = JSON.parse(data)
                res.json(notes);
            }    
        })
    });

//POST request with creating UUID
    app.post("/api/notes", (req, res) => {
    //read json file
        fs.readFile(dbPath, "utf8", (err, data) => {
            //show error if json file cannot be read
            if (err) {
                console.log(err)
            }
            //else create new note
            else {
                //create new note from use input
                let newNote = req.body;
                //create unique id for new note
                const uuid = uuidv4();
                //add id to note
                newNote.id = uuid;
                //parse json data and call it notes
                notes = JSON.parse(data);
                //push to new note
                notes.push(newNote);
                //write to json file with notes stringified
                fs.writeFile(dbPath, JSON.stringify(notes), err => err ? console.log(err) : console.log("Updated Note"))
                //send new note with id to front end
                res.json(newNote);
            }
        })
       
    });

//DELETE request using UUID
    app.delete("/api/notes/:id", (req, res) => {
        //read json file
        fs.readFile(dbPath, "utf8", (err, data)=> {
            //show error if json file cannot be read
            if (err) {
                console.log(err);
            }
            //else delete note
            else {
                //parse json data into note array
                arrayNotes = JSON.parse(data);
                console.log(req.params.id);
                //filter note excluding note to be deleted
                let updateNotes = arrayNotes.filter(notes =>{ 
                    return notes.id !=req.params.id});
                console.log(updateNotes);
                //write to json file with stringified note update and return updated notes to the user
                fs.writeFile(dbPath, JSON.stringify(updateNotes), err => err ? console.log(error): console.log("delete db.json"));
                return res.json(notes);
            }
        })
    });
}