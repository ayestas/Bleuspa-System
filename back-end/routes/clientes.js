const express = require('express');
const router = express.Router();
const {addCliente} = require("../controllers/cliente")

//router.get('/', (req, res) => {res.send('HIIIII')})

router.post('/addCliente', addCliente);

module.exports = router;