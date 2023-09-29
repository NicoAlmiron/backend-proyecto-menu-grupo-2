import { Router } from "express";
import { borrarUsuario, crearUsuario, editarUsuario, listarUsuarios } from "../controllers/usuarios.controllers.js";

const usuarioRouter = Router();

usuarioRouter.route('/').get(listarUsuarios)
usuarioRouter.route('/nuevo').post(crearUsuario);
usuarioRouter.route('/:id').put(editarUsuario).delete(borrarUsuario)

export default usuarioRouter;