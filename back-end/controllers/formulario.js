const Formulario = require("../models/formulario");
const Cliente = require("../models/cliente");

exports.getFormularios = async (req, res) => {
    const forms = await Formulario.aggregate([
        {
            $lookup: {
                "from": "clientes",
                "localField": "id_client",
                "foreignField": "_id",
                "as": "cliente"
            }
        },
        { 
            $project : { 
                _id : 1, 
                id_client : 1, 
                cliente: '$cliente',
                born_date: 1,
                status: 1,
                email: 1,
                occupation: 1,
                treatment: 1,
                diagnostic: 1,
                skin_type: 1,
                skin_texture: 1,
                face_characteristics: 1,
                pathologys: 1,
                aesthetic_surgeries: 1,
                cutaneous_surgeries: 1,
                observations: 1
            }
        }
      ])
    
    try
    {
        if (!forms)
        {
            return res.status(400).json({
                success: false,
                message: "Este formulario no existe."
            })
        }
        
        res.status(201).json({
            success: true,
            forms
        })
    }
    catch (error)
    {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.addFormulario = async (req, res) => {
    const {id_cliente} = req.body;
    const clienteExist = await Cliente.findOne({ id_cliente });

    if (!clienteExist)
    {
        return res.status(400).json({
            success: false,
            message: "No existe este cliente para lograr crear el formulario."
        })
    }

    try
    {
        const form = await Formulario.create(req.body);
        res.status(201).json({
            success: true,
            form
        })
    }
    catch (error)
    {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}