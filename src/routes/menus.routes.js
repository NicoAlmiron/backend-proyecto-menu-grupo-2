import { Router } from "express";
import { crearMenus, editarMenu, eliminarMenu, listarMenus, obtenerMenu } from "../controllers/menus.controllers.js";

const router = Router();

router.route('/menus').get(listarMenus).post(crearMenus)
router.route('/menus/:id').put(editarMenu).delete(eliminarMenu).get(obtenerMenu)

export default router;