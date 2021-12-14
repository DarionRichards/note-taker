// imports
const fs = require("fs");
const path = require("path");

// read from db.json
const readFromDb = () => {
    const notes = fs.readFileSync(path.join(__dirname, "../db/db.json"), {
        encoding: "utf-8",
    });
    return JSON.parse(notes);
};

module.exports = readFromDb;