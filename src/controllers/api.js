const express = require("express");
const readFromDb = require("../utils/readFromDb");
const writeToDb = require("../utils/writeToDb.js");

const getNotes = (req, res) => {
    const notes = readFromDb();
    res.json(notes);
};
const saveNote = (req, res) => {
    res.send("saveNote");
};
const deleteNote = (req, res) => {
    const { id } = req.params;

    const notes = readFromDb();
    console.log(notes);

    const newNotes = notes.filter((note) => {
        return note.id !== id;
    });

    console.log(newNotes);

    writeToDb(JSON.stringify(newNotes));

    res.json(newNotes);
};

module.exports = {
    getNotes,
    saveNote,
    deleteNote,
};