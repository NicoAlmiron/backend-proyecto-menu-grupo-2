import Usuario from "../models/usuario.js"


export const listarUsuarios = (req, res) => {
    try{
        res.send('Prueba listarUsuarios')

    }catch(error){
        console.log(error)
    }
};

export const crearUsuarios = (req, res) => {
    try{
        console.log(req.body)
        res.send('Prueba crearUsuarios')

    }catch(error){
        console.log(error)
    }
}