const express = require('express');
const router = express.Router();
const { addDetalleOrden, getDetallesOrden } = require("../controllers/detalleOrden");

router.post('/addDetalleOrden', addDetalleOrden);
router.get('/detallesorden', getDetallesOrden);

module.exports = router;