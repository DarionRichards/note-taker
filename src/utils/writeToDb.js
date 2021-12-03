const fs = require("fs");
const path = require("path");

const writeToDb = (data) =>
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), data);

module.exports = writeToDb;