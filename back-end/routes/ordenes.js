const express = require('express');
const router = express.Router();
const { addOrden, getOrdenes, getOrdenesLikeName, getOrdenesLikeDate } = require("../controllers/orden")

router.post('/addOrden', addOrden);
router.get('/ordenes', getOrdenes);
router.get('/ordenes/name/:name', getOrdenesLikeName);
router.get('/ordenes/date/:date', getOrdenesLikeDate);

module.exports = router;