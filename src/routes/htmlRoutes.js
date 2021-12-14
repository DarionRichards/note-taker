const { Router } = require("express");

const { renderHomePage, renderNotesPage } = require("../controllers/html");

const router = Router();

// render ./public/index.html if URL === " / "
router.get("/", renderHomePage);

// render ./public/notes.html if URL === " /notes "
router.get("/notes", renderNotesPage);

module.exports = router;