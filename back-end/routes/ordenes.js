const express = require('express');
const router = express.Router();
const { addOrden, getOrdenes, getOrdenesById } = require("../controllers/orden")

router.post('/addOrden', addOrden);
router.get('/ordenes', getOrdenes);
router.get('/ordenes/id/:id', getOrdenesById);

module.exports = router;