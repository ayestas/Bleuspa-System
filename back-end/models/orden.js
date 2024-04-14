const mongoose = require('mongoose');
const cliente = require('./cliente')

const ordenSchema = new mongoose.Schema({
    id_client: {
        type: mongoose.Schema.ObjectId,
        ref: cliente,
        required : [true, 'Cliente es requerido.'],
    },
    date: {
        type: Date,
        required : [true, 'Fecha de orden es requerida.'],
    }
})

module.exports = mongoose.model("Orden", ordenSchema);