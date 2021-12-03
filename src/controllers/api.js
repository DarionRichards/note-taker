// imports
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const readFromDb = require("../utils/readFromDb");
const writeToDb = require("../utils/writeToDb.js");

// response for GET /api/notes
const getNotes = (req, res) => {
    const notes = readFromDb();
    res.json(notes);
};

// response for POST /api/notes
const saveNote = (req, res) => {
    const notePayload = req.body;
    const notes = readFromDb();

    // create object generate random ID for newNote, push payload (noteTitle & noteText)
    const newNote = {
        id: uuidv4(),
        ...notePayload,
    };

    // push newNote object into notes array
    notes.push(newNote);

    // write new notes array to db.json
    writeToDb(JSON.stringify(notes));
    res.json(notes);
};

// response for DELETE /api/notes/:id
const deleteNote = (req, res) => {
    // destructure object to get "ID"
    const { id } = req.params;
    const notes = readFromDb();

    // returns all notes that do not === "ID"
    const newNotes = notes.filter((note) => {
        return note.id !== id;
    });

    writeToDb(JSON.stringify(newNotes));
    res.json(newNotes);
};

module.exports = {
    getNotes,
    saveNote,
    deleteNote,
};