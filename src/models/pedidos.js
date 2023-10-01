import mongoose, { Schema } from "mongoose";

const pedidosSchema = new Schema({
  nombreMenu: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  precio: {
    type: Number,
    required: true,
    min: 1,
    max: 10000,
  },
  imagen: {
    type: String,
    required: true,
  },
  detalle: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});
const Pedidos = mongoose.model("pedido", pedidosSchema);

export default Pedidos;
