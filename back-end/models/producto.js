const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    code_product: {
        type: String,
        required : [true, 'Codigo es requerido.'],
        maxlength: 50
    },
    name: {
        type: String,
        required : [true, 'Nombre es requerido.'],
        maxlength: 150
    },
    unit_stock: {
        type: Number,
        required : [true, 'Cantidad en stock es requerido.']
    },
    expiration_date: {
        type: Date,
        required : [true, 'Fecha es requerida.'],
    },
    description: {
        type: String,
        maxlength: 250
    },
    source_price: {
        type: mongoose.SchemaTypes.Decimal128,
        required : [true, 'Precio de compra es requerido.']
    },
    sale_price: {
        type: mongoose.SchemaTypes.Decimal128,
        required : [true, 'Precio de venta es requerido.']
    }
})

module.exports = mongoose.model("Producto", productoSchema);