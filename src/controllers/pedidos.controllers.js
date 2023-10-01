import Pedido from "../models/pedidos.js";

export const listarPedidos = async (req, res) => {
  try {
    const listaPedidos = await Pedido.find();
    res.status(200).json(listaPedidos);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "No se encontraron pedidos" });
  }
};

export const crearPedidos = async (req, res) => {
  try {
    const pedidoNuevo = new Pedido(req.body);
    await pedidoNuevo.save();
    res.status(201).json({ mensaje: "Su pedido fue registrado con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "No se pudo crear el pedido" });
  }
};

export const editarPedidos = async (req, res) => {
  try {
    await Pedido.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ mensaje: "Su pedido fue editado con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "No se pudo editar el pedido" });
  }
};

export const eliminarPedidos = async (req, res) => {
  try {
    await Pedido.findByIdAndRemove(req.params.id);
    res.status(201).json({ mensaje: "Su pedido fue eliminado con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "No se pudo eliminar el pedido" });
  }
};
