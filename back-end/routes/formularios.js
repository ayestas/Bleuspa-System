const express = require('express');
const router = express.Router();
const { addFormulario, getFormularios } = require("../controllers/formulario");

router.post('/addFormulario', addFormulario);
router.get('/formularios', getFormularios);

module.exports = router;