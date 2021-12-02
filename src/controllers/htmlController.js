const express = require("express");

const { staticFilePath } = require("../utils/staticFilePath");

const renderHomePage = (req, res) => res.sendFile(staticFilePath("index.html"));

const renderNotesPage = (req, res) =>
    res.sendFile(staticFilePath("notes.html"));

module.exports = {
    renderHomePage,
    renderNotesPage,
};