import { Router } from "express";
import { crearUsuarios, editarUsuarios, listarUsuarios } from "../controllers/usuarios.controllers.js";

const usuarioRouter = Router();

usuarioRouter.route('/usuario').get(listarUsuarios).post(crearUsuarios);
usuarioRouter.route('/usuario/:id').put(editarUsuarios)

export default usuarioRouter;