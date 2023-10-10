import { response } from "express"
import { ObjectId } from "mongodb";
import { client, conection} from "../database/conection.js";
import bcryptjs from "bcryptjs";
//import { generateJWT } from "../helpers/generate.JWT.js";

export const login = async (req,res=response) =>{
    try {
        const {usuario, password} = req.body;
        const db = await conection();
        const user = await db.Usuarios.findOne({usuario: usuario})

        if (!user){
            return res.status(400).json({
                msg: "User not found"
            })
        } else {
            return res.status(200).json({
                msg: "si sirve"
            })
        }
    } catch (error) {
        console.log(error);
        return res.json({
            msg:"contacte al servicio tecnico"
        })
    }
}