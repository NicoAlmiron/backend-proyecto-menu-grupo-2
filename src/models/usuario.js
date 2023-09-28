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
        maxLenght:200,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    },
    password: {
        type: String,
        required: true,
        match: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
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
