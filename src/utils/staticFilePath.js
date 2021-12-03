const path = require("path");

const staticFilePath = (file) => {
    const filePath = path.join(__dirname, `../../`, `public/${file}`);
    return filePath;
};

module.exports = { staticFilePath };