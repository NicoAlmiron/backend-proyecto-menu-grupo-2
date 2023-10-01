import jwt from "jsonwebtoken";
import 'dotenv/config';

const generarJWT = (uid, nombre) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, nombre };
        jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: '1h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            }
            resolve(token);
        })
    })
}

export default generarJWT