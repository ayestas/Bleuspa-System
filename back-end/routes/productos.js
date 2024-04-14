const express = require('express');
const router = express.Router();
const { addProducto } = require("../controllers/producto");

router.post('/addProducto', addProducto);

module.exports = router;