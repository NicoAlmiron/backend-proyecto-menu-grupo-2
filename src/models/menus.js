import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema({
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
        min: 100,
        max: 100000,
    },
    imagen: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    detalle: {
        type: String,
        required: true,
        maxLength: 600,
    },
    estado: {
        type: Boolean,
        required: true,
    }

});


const Menu = mongoose.model('Menu', menuSchema);

export default Menu;