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
    const {usuario ,password} = req.body;
    const users = new Usuarios({usuario, password});

   
     
    // Encriptar nuestra contraseña
    const salt = bcryptjs.genSaltSync();
    users.password = bcryptjs.hashSync(password, salt);
    
    // Guardar en MONGODB
    await users.save();
    res.json({
        "message":"post api",
        users
    })
}

export const deleteUsers = async (req,res)=>{
    
}