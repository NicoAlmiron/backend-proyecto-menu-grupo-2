import { Router } from "express";
import { crearUsuarios, listarUsuarios } from "../controllers/usuarios.controllers.js";

const usuarioRouter = Router();

usuarioRouter.route('/usuario').get(listarUsuarios).post(crearUsuarios)

export default usuarioRouter;