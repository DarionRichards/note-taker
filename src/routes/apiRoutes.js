const { Router } = require("express");

const { getNotes, saveNote, deleteNote } = require("../controllers/api");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", saveNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;