import Pedidos from "../models/pedidos";

export const listarPedidos = (req, res) => {
  try {
    res.send("esto es una prueba");
  } catch (error) {
    console.log(error);
  }
};
