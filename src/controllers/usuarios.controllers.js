import Usuario from "../models/usuario.js"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
        return res.status(400).json({
            mensaje: "Correo o password invalido",
        });
    }
        res.status(200).json({
            mensaje: "El usuario existe",
            uid: usuario._id,
            nombre: usuario.nombreUsuario,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "usuario o contraseña invalido",
        });
    }
};

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

export const crearUsuario = async (req, res) => {
    try {
    //Verificar si el email ya existe
        const { email } = req.body;
        let usuario = await Usuario.findOne({ email }); //devuelve un null si no existe
        console.log(usuario);
        if (usuario) {
            return res.status(400).json({
                mensaje: "Ya existe un usuario con el correo enviado",
            });
        }
    //Crear un nuevo usuario
        usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json({
        mensaje: "usuario creado"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
        mensaje: "El usuario no pudo ser creado",
        });
    }
};

export const editarUsuario = async (req, res) => {
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
};

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
};