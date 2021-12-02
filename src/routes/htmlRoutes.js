const { Router } = require("express");

const {
    renderHomePage,
    renderNotesPage,
} = require("../controllers/htmlController");

const router = Router();

router.get("/", renderHomePage);
router.get("/notes", renderNotesPage);

module.exports = router;