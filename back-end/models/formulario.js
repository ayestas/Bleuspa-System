const mongoose = require('mongoose');
const cliente = require('../models/cliente')

const formularioSchema = new mongoose.Schema({
    id_client: {
        type: mongoose.Schema.ObjectId,
        ref: cliente,
        required : [true, 'Cliente es requerido.'],
    },
    born_date: {
        type: Date,
        required : [true, 'Fecha de nacimiento es requerida.'],
    },
    status: {
        type: String,
        required : [true, 'Estado civil es requerido.'],
        maxlength: 50
    },
    email: {
        type: String,
        required : [true, 'Correo electrónico es requerido.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Ingrese un correo válido.']
    },
    occupation: {
        type: String,
        required : [true, 'Ocupacion es requerido.'],
        maxlength: 80
    },
    treatment: {
        type: String,
        required : [true, 'Descripcion corta del tratamiento es requerido.'],
        maxlength: 80
    },
    diagnostic: {
        type: String,
        required : [true, 'Descripcion corta del diagnostico es requerido.'],
        maxlength: 80
    },
    image_face: {
        type: String,
        //required : [true, 'Imagen de rostro es requerida.'],
    },
    image_before: {
        type: String,
        //required : [true, 'Imagen del antes es requerida.'],
    },
    image_after: {
        type: String,
        //required : [true, 'Imagen del despues es requerida.'],
    },
    skin_type: {
        type: String,
        maxlength: 100
    },
    skin_texture: {
        type: String,
        maxlength: 100
    },
    face_characteristics: {
        type: String,
        maxlength: 100
    },
    pathologys: {
        type: String,
        maxlength: 100
    },
    aesthetic_surgeries: {
        type: String,
        maxlength: 100
    },
    cutaneous_surgeries: {
        type: String,
        maxlength: 100
    },
    observations: {
        type: String,
        maxlength: 100
    }
})

module.exports = mongoose.model("Formulario", formularioSchema);