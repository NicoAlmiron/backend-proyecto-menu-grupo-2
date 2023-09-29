import Usuario from "../models/usuario.js"


export const listarUsuarios = async (req, res) => {
    try{
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios)

    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar usuarios"
        })
    }
};

export const crearUsuarios = async (req, res) => {
    try{
       
        const usuarioNUevo = new Usuario(req.body)
        
        await usuarioNUevo.save();
        res.status(201).json({
            mensaje: "El usuario fue creado correctamente"
        })


    }catch(error){
        console.log(error);
        res.status(400).json({
            mensaje: "El usuario no pudo ser creado"
        })
    }
}