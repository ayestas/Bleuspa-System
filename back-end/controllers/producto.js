const Producto = require("../models/producto");

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