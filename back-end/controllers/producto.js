const Producto = require("../models/producto");

exports.getProductos = async (req, res) => {
    const producto = await Producto.find();

    try
    {
        if (!producto)
        {
            return res.status(400).json({
                success: false,
                message: "Este producto no existe."
            })
        }
        
        res.status(201).json({
            success: true,
            producto
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

exports.getProductosLikeName = async (req, res) => {
    const { name } = req.params;
    const producto = await Producto.find({ "name" : { $regex : new RegExp(name, "i") } } );
    
    try
    {
        if (!producto)
        {
            return res.status(400).json({
                success: false,
                message: "Este producto no existe."
            })
        }
        
        res.status(201).json({
            success: true,
            producto
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

exports.addProducto = async (req, res) => {
    const { expiration_date } = req.body;

    try
    {
        const producto = await Producto.create(req.body);
        res.status(201).json({
            success: true,
            producto
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