import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 16,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,200}$/

    },
    password: {
        type: String,
        required: true,
        minLenght: 8,
        maxLenght:200,
    },
    estado: {
        type: Boolean,
    },
    perfil: {
        type: String,
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;
