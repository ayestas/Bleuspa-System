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
    },
    description: {
        type: String,
        required : [true, 'Descripción de cita es requerida.'],
        maxlength: 250
    },
})

module.exports = mongoose.model("Cita", citaSchema);