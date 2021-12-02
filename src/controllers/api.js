const express = require("express");
const readFromDb = require("../utils/readFromDb");

const getNotes = (req, res) => {
    const notes = readFromDb();
    res.json(notes);
};
const saveNote = (req, res) => {
    res.send("saveNote");
};
const deleteNote = (req, res) => {
    res.send("deletNote");
};

module.exports = {
    getNotes,
    saveNote,
    deleteNote,
};