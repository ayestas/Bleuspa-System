const Tratamiento = require("../models/tratamiento");
const Formulario = require("../models/formulario");

exports.getTratamientos = async (req, res) => {
    const tratamiento = await Tratamiento.find();

    try
    {
        if (!tratamiento)
        {
            return res.status(400).json({
                success: false,
                message: "No existe ningún tratamiento."
            })
        }
        
        res.status(201).json({
            success: true,
            tratamiento
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

exports.addTratamiento = async (req, res) => {
    const { id_form } = req.body;
    const formExist = await Formulario.findOne({ _id: id_form });

    if (!formExist)
    {
        return res.status(400).json({
            success: false,
            message: "No existe este formulario para lograr crear el tratamiento."
        })
    }

    try
    {
        const tratamiento = await Tratamiento.create(req.body);
        res.status(201).json({
            success: true,
            tratamiento
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