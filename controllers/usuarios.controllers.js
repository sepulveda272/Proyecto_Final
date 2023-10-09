import Usuarios from "../models/usuario.js";
import bcryptjs from "bcryptjs";

export const getUsers = async (req,res)=>{
    const { hasta, desde} = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuarios.countDocuments(query),
        Usuarios.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        usuarios
    });
}

export const postUsers = async (req,res)=>{
    
}