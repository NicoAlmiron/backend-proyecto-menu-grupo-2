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
    .post([
        check("nombre")
            .notEmpty()
            .withMessage('Este dato es obligatorio')
            .isLength({ min: 2, max: 16 })
            .withMessage('El nombre debe tener entre 2 y 16 caracteres'),
        check('email')
            .notEmpty()
            .withMessage('Este dato es obligatorio')
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,200}$/)
            .withMessage('El email debe cumplir con un formato valido, ej: nombre@mail.com'),
        check('password')
            .notEmpty()
            .withMessage('Este dato es obligatorio')
            .isLength({ min: 8, max: 200 })
            .withMessage('El nombre debe tener entre 8 y 200 caracteres')
    ],
        crearUsuario);

usuarioRouter
    .route("/:id")
    .put(editarUsuario)
    .delete(borrarUsuario);

export default usuarioRouter;
