const mongoose = require('mongoose');
const orden = require('./orden');
const producto = require('./producto');

const detalleOrdenSchema = new mongoose.Schema({
    id_order: {
        type: mongoose.Schema.ObjectId,
        ref: orden,
        required: [true, 'Orden es requerida.'],
    },
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
    },
    status: {
        type: String
    },
    loan_date: {
        type: Date
    },
    return_date: {
        type: Date
    }
})

module.exports = mongoose.model("DetalleOrden", detalleOrdenSchema);