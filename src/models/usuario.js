import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true,
    },
    nombre:{
        type: String,
        required: true,
        unique: true,
        minLenght: 2,
        maxLenght: 16,
    },
    email: {
        type: String,
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
        required: true,
    },
    perfil: {
        type: String,
        required: true,
    },
})

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;
