// imports
const { Router } = require("express");
const { getNotes, saveNote, deleteNote } = require("../controllers/api");

const router = Router();

// get all currently stored notes
router.get("/notes", getNotes);

// save a note to db.json
router.post("/notes", saveNote);

// delete note from db.json, using ID
router.delete("/notes/:id", deleteNote);

module.exports = router;