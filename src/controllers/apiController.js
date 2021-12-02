const express = require("express");
const readFromDb = require("../utils/readFromDb");

const getNotes = (req, res) => {
    const notes = readFromDb();
    res.json(notes);
};
const saveNote = (req, res) => {};
const deleteNote = (req, res) => {};

module.exports = {
    getNotes,
    saveNote,
    deleteNote,
};