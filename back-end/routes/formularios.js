const express = require('express');
const router = express.Router();
const { addFormulario, getFormularios, getFormularioLikeName } = require("../controllers/formulario");

router.post('/addFormulario', addFormulario);
router.get('/formularios', getFormularios);
router.get('/formularios/name/:name', getFormularioLikeName);

module.exports = router;