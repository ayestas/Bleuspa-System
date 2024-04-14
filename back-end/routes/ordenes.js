const express = require('express');
const router = express.Router();
const {addOrden} = require("../controllers/orden")

router.post('/addOrden', addOrden);

module.exports = router;