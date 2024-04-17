const express = require('express');
const router = express.Router();
const { addTratamiento, getTratamientos } = require("../controllers/tratamiento");

router.post('/addTratamiento', addTratamiento);
router.get('/tratamientos', getTratamientos);

module.exports = router;