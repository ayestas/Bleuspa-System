const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'Nombre es requerido.'],
        maxlength: 100
    },
    address: {
        type: String,
        required : [true, 'Direccion es requerida.'],
        maxlength: 150
    },
    phone: {
        type: String,
        required : [true, 'Numero telefonico es requerido.'],
        maxlength: 12
    }
})

module.exports = mongoose.model("Cliente", clienteSchema);