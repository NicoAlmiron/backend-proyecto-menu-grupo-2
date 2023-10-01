import { Router } from "express";
import {
  crearPedidos,
  editarPedidos,
  eliminarPedidos,
  listarPedidos,
} from "../controllers/pedidos.controllers.js";

const pedidosRouter = Router();

pedidosRouter.route("/pedidos").get(listarPedidos).post(crearPedidos);
pedidosRouter.route("/pedidos/:id").put(editarPedidos).delete(eliminarPedidos);

export default pedidosRouter;
