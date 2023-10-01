import mongoose, { Schema } from "mongoose";

const pedidosSchema = new Schema({
    usuario: { type: String, required: true },
    fecha: {
        type: String,
        required: true,

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
const Pedido = mongoose.model("pedido", pedidosSchema);

export default Pedido;