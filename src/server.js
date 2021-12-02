const express = require("express");

// import routes

const htmlRoutes = require("./routes/htmlRoutes");
// const apiRoutes = require("./routes/apiRoutes");

const PORT = 4000;

const app = express();

app.use(express.static("public"));

app.use("/", htmlRoutes);
// app.get("/api", apiRoutes);

// listen on port for req
app.listen(PORT, () =>
    console.log(`🚀🚀 Server running on http://localhost:${PORT}`)
);