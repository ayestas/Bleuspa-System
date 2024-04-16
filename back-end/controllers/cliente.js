const Cliente = require("../models/cliente");

exports.getClientes = async (req, res) => {
    const cliente = await Cliente.find();
    
    try
    {
        if (!cliente)
        {
            return res.status(400).json({
                success: false,
                message: "Este cliente no existe."
            })
        }
        
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

exports.getClienteLikeName = async (req, res) => {
    const { name } = req.params;
    const cliente = await Cliente.find({ "name" : { $regex : new RegExp(name, "i") } } );
    
    try
    {
        if (!cliente)
        {
            return res.status(400).json({
                success: false,
                message: "Este cliente no existe."
            })
        }
        
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