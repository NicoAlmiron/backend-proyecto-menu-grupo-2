import { Router } from "express";
import { listarPedidos } from "../controllers/pedidos.controllers.js";

const pedidosRouter = Router();

pedidosRouter.route("/pedidos").get(listarPedidos);

export default pedidosRouter;
