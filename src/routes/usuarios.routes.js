import { Router } from "express";
import {
    borrarUsuario,
    crearUsuario,
    editarUsuario,
    listarUsuarios,
    login,
} from "../controllers/usuarios.controllers.js";
import { check } from "express-validator";

const usuarioRouter = Router();

usuarioRouter
    .route("/")
    .post(login)
    .get(listarUsuarios);
usuarioRouter
    .route("/nuevo")
    .post([check("nombre")
        .notEmpty()
        .withMessage('Este dato es obligatorio')], crearUsuario);
usuarioRouter
    .route("/:id")
    .put(editarUsuario)
    .delete(borrarUsuario);

export default usuarioRouter;
