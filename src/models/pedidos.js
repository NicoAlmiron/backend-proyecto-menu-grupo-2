import mongoose, { Schema } from "mongoose";

const pedidosSchema = new Schema({
  usuario: { type: String, required: true },
  fecha: {
    type: String,
    required: true,
    match:
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4} (0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
  },
  menu: {
    type: Array,
    required: true,
  },
  estado: {
    type: Boolean,
    required: true,
  },
});
const Pedidos = mongoose.model("pedido", pedidosSchema);

export default Pedidos;
