import Usuario from "../models/usuario.js"


export const listarUsuarios = (req, res) => {
    try{
        res.send('Prueba de respuesta')

    }catch(error){
        console.log(error)
    }
    
}