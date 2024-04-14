const Formulario = require("../models/formulario");
const Cliente = require("../models/cliente");

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