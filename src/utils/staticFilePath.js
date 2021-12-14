// imports
const path = require("path");

// set static path for public folder
const staticFilePath = (file) =>
    path.join(__dirname, `../../`, `public/${file}`);

module.exports = { staticFilePath };