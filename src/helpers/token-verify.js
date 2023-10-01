import jwt from 'jsonwebtoken';
import 'dotenv/config';

const validarJWT = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            mensaje: 'No hay token en la peticion'
        })
    }
    try {
        const payload = jwt.verify(token, process.env.SECRET_JWT)
        req.id = payload.uid;
        req.nombre = payload.nombre;
    } catch (error) {
        console.log(error)
        //401: error en la autenticacion
        return res.status(401).json({
            mensaje: 'El token no es valido'
        })
    }
    next();
}
export default validarJWT;