import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validarMenu = [
    check("nombreMenu")
    .notEmpty()
    .withMessage("El nombre del menu es un dato obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage(
        "El nombre del menu debe tener entre 2 y 50 caracteres"
    ),
    check("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .custom((value) => {
        if (value >= 1 && value <= 100000) {
            return true;
        } else {
            throw new Error("El precio maximo es de $100.000");
        }
    }),
    check("imagen")
    .notEmpty()
    .withMessage("La url de la imagen es obligatoria")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("Debe ingresar una url valida"),
    check("categoria")
    .notEmpty()
    .withMessage("La categoria es obligatoria")
    .isIn(["Desayunos", "Entradas", "Platos Principales", "Acompañamientos", "Postres", "Bebidas", "Comida Rapida", "Comidas Etnicas", "Comidas Saludables"])
    .withMessage("Debe ingresar una categoria valida"),
    (req, res, next) => { resultadoValidacion(req, res, next) }
];

export default validarMenu;