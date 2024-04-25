const detalleOrden = require("../models/detalleOrden");
const DetalleOrden = require("../models/detalleOrden");
const Orden = require("../models/orden");
const Producto = require("../models/producto");
const mongoose = require('mongoose');

exports.getDetallesOrden = async (req, res) => {
    const detalle = await DetalleOrden.aggregate([
        {
          $lookup: {
            "from": "productos",
            "localField": "id_product",
            "foreignField": "_id",
            "as": "producto"
          }
        },
        {
            $unwind: '$producto'
        },
        { 
            $project : { 
                _id : 1, 
                id_order : 1, 
                price : 1, 
                quantity : 1, 
                status : 1,
                loan_date: 1, 
                return_date : 1, 
                producto: '$producto'
            } 
        }
    ]);

    try
    {
        if (!detalle)
        {
            return res.status(400).json({
                success: false,
                message: "No existe ningún detalle de orden."
            })
        }
        
        res.json(detalle);
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

exports.getDetallesOrdenByOrderId = async (req, res) => {
    const { id_order } = req.params;

    try
    {
        const detalle = await DetalleOrden.aggregate([
            {
              $lookup: {
                "from": "productos",
                "localField": "id_product",
                "foreignField": "_id",
                "as": "producto"
              }
            },
            {
                $unwind: '$producto'
            },
            { $match: { id_order: new mongoose.Types.ObjectId(id_order) } },
            { 
                $project : { 
                    _id : 1, 
                    id_order : 1, 
                    price : 1, 
                    quantity : 1, 
                    status : 1, 
                    loan_date: 1,
                    return_date : 1, 
                    producto: '$producto'
                } 
            }
        ]);

        if (!detalle)
        {
            return res.status(400).json({
                success: false,
                message: "No existe ningún detalle de orden."
            })
        }
        
        res.json(detalle);
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