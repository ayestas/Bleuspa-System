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
        
        res.json(cliente);
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
    const cliente = await Cliente.find({ 
        "name": { 
            $regex: name, 
            $options: 'i' 
        } 
    });
    
    try
    {
        if (!cliente)
        {
            return res.status(400).json({
                success: false,
                message: "Este cliente no existe."
            })
        }

        res.json(cliente);
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

exports.deleteCliente = async (req, res) => {
    const { id } = req.params;

    try
    {
        await Cliente.findByIdAndDelete(id);
        const clienteExist = await Cliente.findById(id);

        if (clienteExist)
        {
            return res.status(400).json({
                success: false,
                message: "Este cliente no se pudo eliminar."
            })
        }
        else 
        {
            return res.status(201).json({
                success: true,
                message: "Cliente eliminado."
            })
        }

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