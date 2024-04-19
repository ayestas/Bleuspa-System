const Orden = require("../models/orden");
const Cliente = require("../models/cliente");

exports.getOrdenes = async (req, res) => {
    const orden = await Orden.aggregate([
        {
          $lookup: {
            "from": "clientes",
            "localField": "id_client",
            "foreignField": "_id",
            "as": "cliente"
          }
        },
        {
            $unwind: '$cliente' // Unwind the combinedData array
        },
        {
            $lookup: {
                "from": "detalleordens",
                "localField": "_id",
                "foreignField": "id_order",
                "as": "detalles"
            }
        },
        {
            $unwind: '$detalles' // Unwind the combinedData array
        },
        {
            $lookup: {
                "from": "productos",
                "localField": "detalles.id_product",
                "foreignField": "_id",
                "as": "producto"
            }
        },
        {
            $unwind: '$producto' // Unwind the combinedData array
        },
        { 
            $project : { 
                _id : 1, 
                id_client : 1, 
                cliente: '$cliente', 
                date: 1,
                detalles: '$detalles',
                producto: '$producto'
            } 
        }
    ]);

    try
    {
        if (!orden)
        {
            return res.status(400).json({
                success: false,
                message: "Esta orden no existe."
            })
        }
        
        res.json(orden);
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

exports.getOrdenesLikeName = async (req, res) => {
    const { name } = req.params;
    const orden = await Orden.aggregate([
        {
          $lookup: {
            "from": "clientes",
            "localField": "id_client",
            "foreignField": "_id",
            "as": "cliente"
          }
        },
        {
            $lookup: {
                "from": "detalleordens",
                "localField": "_id",
                "foreignField": "id_order",
                "as": "detalles"
            }
        },
        {
            $match: {
                "cliente.name": { 
                    $regex: name, 
                    $options: 'i' 
                }
            }
        },
        { 
            $project : { 
                _id : 1, 
                id_client : 1, 
                cliente: '$cliente', 
                date: 1,
                detalles: '$detalles'
            } 
        }
    ]);

    try
    {
        if (!orden)
        {
            return res.status(400).json({
                success: false,
                message: "Esta orden no existe."
            })
        }
        
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

exports.getOrdenesLikeDate = async (req, res) => {
    const { date } = req.params;
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const orden = await Orden.aggregate([
        {
          $lookup: {
            "from": "clientes",
            "localField": "id_client",
            "foreignField": "_id",
            "as": "cliente"
          }
        },
        {
            $lookup: {
                "from": "detalleordens",
                "localField": "_id",
                "foreignField": "id_order",
                "as": "detalles"
            }
        },
        {
            $match: {
                "date": { 
                    $gte: startOfDay, 
                    $lte: endOfDay 
                }
            }
        },
        { 
            $project : { 
                _id : 1, 
                id_client : 1, 
                cliente: '$cliente', 
                date: 1,
                detalles: '$detalles'
            } 
        }
    ]);

    try
    {
        if (!orden)
        {
            return res.status(400).json({
                success: false,
                message: "Esta orden no existe."
            })
        }
        
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