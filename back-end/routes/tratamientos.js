const express = require('express');
const router = express.Router();
const { addTratamiento } = require("../controllers/tratamiento");

router.post('/addTratamiento', addTratamiento);

module.exports = router;