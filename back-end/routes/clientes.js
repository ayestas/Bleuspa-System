const express = require('express');
const router = express.Router();
const {addCliente, getClientes, getClienteLikeName} = require("../controllers/cliente")

//router.get('/', (req, res) => {res.send('HIIIII')})

router.post('/addCliente', addCliente);
router.get('/clientes', getClientes);
router.get('/clientes/name/:name', getClienteLikeName);

module.exports = router;