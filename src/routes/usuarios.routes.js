import { Router } from "express";
import { borrarUsuario, crearUsuarios, editarUsuarios, listarUsuarios } from "../controllers/usuarios.controllers.js";

const usuarioRouter = Router();

usuarioRouter.route('/usuario').get(listarUsuarios).post(crearUsuarios);
usuarioRouter.route('/usuario/:id').put(editarUsuarios).delete(borrarUsuario)

export default usuarioRouter;