const path = require("path");

const staticFilePath = (file) => {
    const filePath = path.join(__dirname, `../../`, `public/${file}`);
    console.log(filePath);
    return filePath;
};

module.exports = { staticFilePath };