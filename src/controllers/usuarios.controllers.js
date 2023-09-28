import Usuario from "../models/usuario.js"


export const listarUsuarios = (req, res) => {
    try{
        res.send('Prueba listarUsuarios')

    }catch(error){
        console.log(error)
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