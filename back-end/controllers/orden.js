const Orden = require("../models/orden");
const Cliente = require("../models/cliente");

exports.addOrden = async (req, res) => {
    const {id_cliente} = req.body;
    const clienteExist = await Cliente.findOne({ id_cliente });

    if (!clienteExist)
    {
        return res.status(400).json({
            success: false,
            message: "No existe este cliente para lograr registrar una orden."
        })
    }

    try
    {
        const orden = await Orden.create(req.body);
        res.status(201).json({
            success: true,
            orden
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