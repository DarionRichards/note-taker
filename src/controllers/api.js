const express = require("express");
const { v4: uuidv4 } = require("uuid");
const readFromDb = require("../utils/readFromDb");
const writeToDb = require("../utils/writeToDb.js");

const getNotes = (req, res) => {
    const notes = readFromDb();
    res.json(notes);
};

const saveNote = (req, res) => {
    const notePayload = req.body;
    const notes = readFromDb();

    const newNote = {
        id: uuidv4(),
        ...notePayload,
    };

    notes.push(newNote);

    writeToDb(JSON.stringify(notes));
    res.json(notes);
};

const deleteNote = (req, res) => {
    const { id } = req.params;
    const notes = readFromDb();

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