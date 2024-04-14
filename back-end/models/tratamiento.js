const mongoose = require('mongoose');
const form = require('../models/formulario')

const tratamientoSchema = new mongoose.Schema({
    id_form: {
        type: mongoose.Schema.ObjectId,
        ref: form,
        required : [true, 'Formulario es requerido.'],
    },
    date: {
        type: Date,
        required : [true, 'Fecha es requerida.'],
    },
    product: {
        type: String,
        required : [true, 'Producto es requerido.'],
        maxlength: 80
    },
    tolerance_time: {
        type: String,
        required : [true, 'Tiempo de tolerancia es requerido.'],
        maxlength: 80
    },
    effect: {
        type: String,
        required : [true, 'Efecto es requerido.'],
        maxlength: 80
    }
})

module.exports = mongoose.model("Tratamiento", tratamientoSchema);