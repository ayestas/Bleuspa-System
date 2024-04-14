const express = require('express');
const router = express.Router();
const { addCita } = require("../controllers/cita")

router.post('/addCita', addCita);

module.exports = router;