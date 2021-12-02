const express = require("express");

const getNotes = (req, res) => {
    // const notes = readFromDb();
    // res.json(notes);
    res.send("working");
};
const saveNote = (req, res) => {};
const deleteNote = (req, res) => {};

module.exports = {
    getNotes,
    saveNote,
    deleteNote,
};