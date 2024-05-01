const express = require('express');
const router = express.Router();
const { addProducto, deleteProducto, getProductos, getProductosById, getProductosLikeName } = require("../controllers/producto");

router.post('/addProducto', addProducto);
router.get('/productos', getProductos);
router.get('/productos/id/:id', getProductosById);
router.get('/productos/name/:name', getProductosLikeName);
router.delete('/deleteProducto/id/:id', deleteProducto);

module.exports = router;