const express = require('express');
const router = express.Router();
const { addFormulario } = require("../controllers/formulario");

router.post('/addFormulario', addFormulario);

module.exports = router;