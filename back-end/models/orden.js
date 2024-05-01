const mongoose = require('mongoose');
const cliente = require('./cliente');
const producto = require('./producto');

const detalleOrdenSchema = new mongoose.Schema({
    id_product: {
        type: mongoose.Schema.ObjectId,
        ref: producto,
        required: [true, 'Al menos un producto es requerido.'],
    },
    price: {
        type: mongoose.SchemaTypes.Decimal128,
        required: [true, 'Precio de venta es requerido.']
    },
    quantity: {
        type: Number,
        required: [true, 'Cantidad es requerida.']
    }
})

const ordenSchema = new mongoose.Schema({
    id_client: {
        type: mongoose.Schema.ObjectId,
        ref: cliente,
        required: [true, 'Cliente es requerido.'],
    },
    date: {
        type: Date,
        required: [true, 'Fecha de orden es requerida.'],
    },
    detalles: [
        detalleOrdenSchema
    ]
})

module.exports = mongoose.model("Orden", ordenSchema);