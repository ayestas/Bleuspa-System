const Cita = require("../models/cita");
const Cliente = require("../models/cliente");

exports.addCita = async (req, res) => {
    const {id_cliente} = req.body;
    const clienteExist = await Cliente.findOne({ id_cliente });

    if (!clienteExist)
    {
        return res.status(400).json({
            success: false,
            message: "No existe este cliente para lograr agendar cita."
        })
    }

    try
    {
        const cita = await Cita.create(req.body);
        res.status(201).json({
            success: true,
            cita
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