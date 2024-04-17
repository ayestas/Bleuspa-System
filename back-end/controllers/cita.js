const Cita = require("../models/cita");
const Cliente = require("../models/cliente");

exports.getCitas = async (req, res) => {
    const cita = await Cita.aggregate([
        {
            $lookup: {
                "from": "clientes",
                "localField": "id_client",
                "foreignField": "_id",
                "as": "cliente"
            }
        },
        { 
            $project: { 
                _id : 1, 
                id_client : 1, 
                cliente: '$cliente', 
                date: 1
            } 
        }
    ]);
    
    try
    {
        if (!cita)
        {
            return res.status(400).json({
                success: false,
                message: "Esta cita no existe."
            })
        }
        
        res.status(201).json({
            success: true,
            cita
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

exports.getCitasLikeName = async (req, res) => {
    const { name } = req.params;
    const cita = await Cita.aggregate([
        {
            $lookup: {
                "from": "clientes",
                "localField": "id_client",
                "foreignField": "_id",
                "as": "cliente"
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
                date: 1
            } 
        }
    ]);
    
    try
    {
        if (!cita)
        {
            return res.status(400).json({
                success: false,
                message: "Esta cita no existe."
            })
        }
        
        res.status(201).json({
            success: true,
            cita
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

exports.getCitasLikeDate = async (req, res) => {
    const { date } = req.params;
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    const cita = await Cita.aggregate([
        {
            $lookup: {
                "from": "clientes",
                "localField": "id_client",
                "foreignField": "_id",
                "as": "cliente"
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
                date: 1
            } 
        }
    ]);
    
    try
    {
        if (!cita)
        {
            return res.status(400).json({
                success: false,
                message: "Esta cita no existe."
            })
        }
        
        res.status(201).json({
            success: true,
            cita
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

exports.addCita = async (req, res) => {
    const { id_cliente } = req.body;
    const clienteExist = await Cliente.findOne({ id_cliente });

    if (!clienteExist)
    {
        return res.status(400).json({
            success: false,
            message: "No existe este cliente para lograr agendar cita."
        })
    }

    try
    {
        const cita = await Cita.create(req.body);
        res.status(201).json({
            success: true,
            cita
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