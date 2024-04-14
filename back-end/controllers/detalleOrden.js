const DetalleOrden = require("../models/detalleOrden");
const Orden = require("../models/orden");
const Producto = require("../models/producto");

exports.addDetalleOrden = async (req, res) => {
    const { id_order, id_product } = req.body;
    
    const ordenExist = await Orden.findOne({ _id: id_order });
    const productoExist = await Producto.findOne({ _id: id_product });

    if(!ordenExist)
    {
        return res.status(400).json({
            success: false,
            message: "No existe esta orden."
        })
    }
    
    else if(!productoExist)
    {
        return res.status(400).json({
            success: false,
            message: "No existe este producto."
        })
    }

    try
    {
        const detalleOrden = await DetalleOrden.create(req.body);
        res.status(201).json({
            success: true,
            detalleOrden
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