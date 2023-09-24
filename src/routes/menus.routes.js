import { Router } from "express";
import { crearMenus, listarMenus } from "../controllers/menus.controllers.js";

const router = Router();

router.route('/menus').get(listarMenus).post(crearMenus)

export default router;