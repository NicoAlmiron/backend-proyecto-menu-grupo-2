import { Router } from "express";
import { crearMenus, editarMenu, eliminarMenu, listarMenus, obtenerMenu } from "../controllers/menus.controllers.js";
import validarMenu from "../helpers/validarMenu.js";
import validarJWT from "../helpers/token-verify.js";

const router = Router();

router.route('/menus').get(listarMenus).post(validarMenu, crearMenus)
router.route('/menus/:id').put(validarMenu, editarMenu).delete(eliminarMenu).get(obtenerMenu)

export default router;