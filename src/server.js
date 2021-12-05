const express = require("express");

// import routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 4000;

const app = express();

// app usage
app.use(express.static("public"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// app routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// listen on port for req
app.listen(PORT, () =>
    console.log(`🚀🚀 Server running on http://localhost:${PORT}`)
);