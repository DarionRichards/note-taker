const { Router } = require("express");

const {
    getNotes,
    saveNote,
    deleteNote,
} = require("../controllers/apiController");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", saveNote);
router.delete("/api/notes/:id", deleteNote);

module.exports = router;