const express = require('express');
const router = express.Router();
const { addCita, deleteCita, getCitas, getCitasLikeName, getCitasLikeDate } = require("../controllers/cita")

router.post('/addCita', addCita);
router.get('/citas', getCitas);
router.get('/citas/name/:name', getCitasLikeName);
router.get('/citas/date/:date', getCitasLikeDate);
router.delete('/deleteCita/id/:id', deleteCita);

module.exports = router;