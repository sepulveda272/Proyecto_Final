import { response, request } from 'express';
import { ObjectId } from "mongodb";
import jwt from 'jsonwebtoken';
import { conection } from "../database/conection.js";

const validateJWT = async (req = request, res = response, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
        const db = await conection();
        const user = await db.Usuarios.findOne({ _id:  new ObjectId (uid) });

        if (!user) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en la DB'
            });
        }

        if (!user.estado) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            });
        }

        req.user = user;
        console.log("req usuario en validate", req.user);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
}

export { validateJWT };
