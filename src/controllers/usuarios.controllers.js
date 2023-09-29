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
       
        const usuarioNuevo = new Usuario(req.body)
        
        await usuarioNuevo.save();
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

export const editarUsuarios = async (req, res) => {
    try{
        await Usuario.findByIdAndUpdate(req.params.id, req.body) 
        res.status(200).json({
            mensaje: "El usuario fue editado correctamente"
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            mensaje: "El usuario no pudo ser editado"
        })
    }
}


export const borrarUsuario = async (req, res) => {
    try{
        await Usuario.findByIdAndDelete(req.params.id) 
        res.status(200).json({
            mensaje: "El usuario fue borrado correctamente"
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            mensaje: "El usuario no pudo ser borrado"
        })
    }
}