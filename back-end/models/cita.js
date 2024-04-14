const mongoose = require('mongoose');
const cliente = require('../models/cliente')

const citaSchema = new mongoose.Schema({
    id_client: {
        type: mongoose.Schema.ObjectId,
        ref: cliente,
        required : [true, 'Cliente es requerido.'],
    },
    date: {
        type: Date,
        required : [true, 'Fecha de cita es requerida.'],
    }
})

module.exports = mongoose.model("Cita", citaSchema);