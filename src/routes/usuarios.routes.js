import { Router } from "express";
import {
    borrarUsuario,
    crearUsuario,
    editarUsuario,
    listarUsuarios,
    login,
} from "../controllers/usuarios.controllers.js";
import validacionesUsuarios from "../helpers/validacionUsuario.js";

const usuarioRouter = Router();

usuarioRouter
    .route("/")
    .post(login)
    .get(listarUsuarios);

usuarioRouter
    .route("/nuevo")
    .post(validacionesUsuarios, crearUsuario);

usuarioRouter
    .route("/:id")
    .put(validacionesUsuarios, editarUsuario)
    .delete(borrarUsuario);

export default usuarioRouter;
