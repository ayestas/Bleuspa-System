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
        
        res.json(producto);
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

exports.getProductosById = async (req, res) => {
    const { id } = req.params;
    const producto = await Producto.findById(id);

    try
    {
        if (!producto)
        {
            return res.status(400).json({
                success: false,
                message: "Este producto no existe."
            })
        }
        
        res.json(producto);
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
    const producto = await Producto.find({ 
        "name" : { 
            $regex: name, 
            $options: 'i'
        }
    });
    
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

exports.deleteProducto = async (req, res) => {
    const { id } = req.params;

    try
    {
        await Producto.findByIdAndDelete(id);
        const productoExist = await Producto.findById(id);

        if (productoExist)
        {
            return res.status(400).json({
                success: false,
                message: "Este producto no se pudo eliminar."
            })
        }
        else 
        {
            return res.status(201).json({
                success: true,
                message: "Producto eliminado."
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