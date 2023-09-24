import mongoose from "mongoose";
import Menu from "../models/menus.js";

export const listarMenus = async(req, res) => {
    try {
        const listaMenus = await Menu.find();
        res.status(200).json(listaMenus);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'No se encontraron productos' })
    }
}

export const crearMenus = async(req, res) => {
    try {
        console.log(req.body);
        const menuNuevo = new Menu(req.body);
        await menuNuevo.save();
        res.status(201).json({ mensaje: 'Creaste un menu nuevo exitosamente!' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'No se pudo crear el menu' })
    }
}