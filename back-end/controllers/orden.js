const Orden = require("../models/orden");
const Cliente = require("../models/cliente");
const mongoose = require('mongoose');

exports.getOrdenes = async (req, res) => {
    try {
        const ordenes = await Orden.aggregate([
            {
                $lookup: {
                    "from": "clientes",
                    "localField": "id_client",
                    "foreignField": "_id",
                    "as": "cliente"
                }
            },
            {
                $unwind: '$cliente'
            },
            {
                $project: {
                    _id: 1,
                    id_client: 1,
                    cliente: '$cliente',
                    date: 1,
                    detalles: 1
                }
            }
        ]);

        if (ordenes.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No existen órdenes."
            });
        }

        res.json(ordenes);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getOrdenesById = async (req, res) => {
    const { id } = req.params;
    try {
        const ordenes = await Orden.aggregate([
            {
                $lookup: {
                    "from": "clientes",
                    "localField": "id_client",
                    "foreignField": "_id",
                    "as": "cliente"
                }
            },
            {
                $unwind: '$cliente'
            },
            { $match: { _id: new mongoose.Types.ObjectId(id) } },
            {
                $project: {
                    _id: 1,
                    id_client: 1,
                    cliente: '$cliente',
                    date: 1,
                    detalles: 1
                }
            }
        ]);

        if (ordenes.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No existen órdenes."
            });
        }

        res.json(ordenes);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.addOrden = async (req, res) => {
    const { id_cliente } = req.body;
    const clienteExist = await Cliente.findOne({ id_cliente });

    if (!clienteExist) {
        return res.status(400).json({
            success: false,
            message: "No existe este cliente para lograr registrar una orden."
        })
    }

    try {
        const orden = await Orden.create(req.body);
        res.status(201).json({
            success: true,
            orden
        })
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}