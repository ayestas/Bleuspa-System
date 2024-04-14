const express = require('express');
const router = express.Router();
const {addDetalleOrden} = require("../controllers/detalleOrden");

router.post('/addDetalleOrden', addDetalleOrden);

module.exports = router;