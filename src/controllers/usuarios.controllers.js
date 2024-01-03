import generarJWT from "../helpers/token-sign.js";
import Usuario from "../models/usuario.js";
import bcrypt from 'bcrypt';

export const crearUsuario = async(req, res) => {
    try {
        const { email, password } = req.body;
        let usuario = await Usuario.findOne({ email });
        console.log(usuario);
        if (usuario) {
            return res.status(400).json({
                mensaje: "Error al crear un usuario nuevo, este correo ya existe",
            });
        }

        usuario = new Usuario(req.body);
        console.log(usuario);
        const salt = bcrypt.genSaltSync(10);
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        res.status(201).json({
            mensaje: "usuario creado",
            nombre: usuario.nombre,
            uid: usuario._id,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "El usuario no pudo ser creado",
        });
    }
};

export const listarUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar usuarios"
        })
    }
};

export const editarUsuario = async(req, res) => {
    try {
        await Usuario.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: "El usuario fue editado correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "El usuario no pudo ser editado"
        })
    }
};

export const borrarUsuario = async(req, res) => {
    try {
        await Usuario.findByIdAndRemove(req.params.id)
        res.status(200).json({
            mensaje: "El usuario fue borrado correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "El usuario no pudo ser borrado"
        })
    }
};

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({
                mensaje: "Correo o password invalido - correo",
            });
        }

        const passwordValido = bcrypt.compareSync(password, usuario.password);
        if (!passwordValido) {
            return res.status(400).json({
                mensaje: "Correo o password invalido - password"
            });
        }

        if (!usuario.estado) {
            return res.status(400).json({
                mensaje: "Usuario Suspendido"
            });
        }


        const token = await generarJWT(usuario._id, usuario.nombre, usuario.perfil)

        res.status(200).json({
            mensaje: "El usuario existe",
            uid: usuario._id,
            nombre: usuario.nombre,
            perfil: usuario.perfil,
            tokenGenerado: token,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "usuario o contraseña invalido",
        });
    }
};