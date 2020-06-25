const fs = require("fs");
const path = require("path");
const express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

var data = fs.readFileSync("db.json");
var notes = JSON.parse(data);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// // A function for deleting a note from the db
// const deleteNote = (id) => {
//     return $.ajax({
//         url: "api/notes/" + id,
//         method: "DELETE",
//     });
// };

app.get("/api/notes", function (req, res) {
    res.json(notes);
});

app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    newNote.id = notes.length + 1;
    notes.push(newNote);
    if (newNote) {
        fs.writeFile("db.json", JSON.stringify(notes, null, 4), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
        res.json(newNote);
    }
});

app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;

    notes = notes.filter((note) => {
        return note.id != id;
    });

    fs.writeFile("db.json", JSON.stringify(notes, null, 4), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
    res.json(notes);
});

app.listen(PORT, function () {
    console.log(`Listening on PORT: ${PORT}`);
});
