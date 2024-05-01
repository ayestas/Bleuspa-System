const express = require('express');
const router = express.Router();
const { addOrden, getOrdenes, getOrdenesById, deleteOrden } = require("../controllers/orden")

router.post('/addOrden', addOrden);
router.get('/ordenes', getOrdenes);
router.get('/ordenes/id/:id', getOrdenesById);
router.delete('/deleteOrden/id/:id', deleteOrden);

module.exports = router;