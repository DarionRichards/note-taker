const path = require("path");

const staticFilePath = (file) =>
    path.join(__dirname, `../../`, `public/${file}`);

module.exports = { staticFilePath };