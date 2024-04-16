const express = require('express');
const router = express.Router();
const { addProducto, getProductos, getProductosLikeName } = require("../controllers/producto");

router.post('/addProducto', addProducto);
router.get('/productos', getProductos);
router.get('/productos/name/:name', getProductosLikeName);

module.exports = router;