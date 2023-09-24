import { Router } from "express";
import { listarMenus } from "../controllers/menus.controllers.js";

const router = Router();

router.route('/menus').get(listarMenus)

export default router;