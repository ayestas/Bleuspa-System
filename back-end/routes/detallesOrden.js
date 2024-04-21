const express = require('express');
const router = express.Router();
const { addDetalleOrden, getDetallesOrden, getDetallesOrdenByOrderId } = require("../controllers/detalleOrden");

router.post('/addDetalleOrden', addDetalleOrden);
router.get('/detallesorden', getDetallesOrden);
router.get('/detallesorden/id_order/:id_order', getDetallesOrdenByOrderId);

module.exports = router;