const Cliente = require("../models/cliente");

exports.addCliente = async (req, res) => {
    const { name } = req.body;
    const clientexist = await Cliente.findOne({ name });

    if (clientexist)
    {
        return res.status(400).json({
            success: false,
            message: "Este cliente ya existe."
        })
    }

    try
    {
        const cliente = await Cliente.create(req.body);
        res.status(201).json({
            success: true,
            cliente
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