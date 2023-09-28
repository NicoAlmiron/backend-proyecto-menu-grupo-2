import { Router } from "express";
import { listarUsuarios } from "../controllers/usuarios.controllers.js";

const usuarioRouter = Router();

usuarioRouter.route('/usuario').get(listarUsuarios)

export default usuarioRouter;