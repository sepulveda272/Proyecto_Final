import { response } from "express"
import { ObjectId } from "mongodb";
import { client, conection} from "../database/conection.js";
import bcryptjs from "bcryptjs";
import generateJWT from "../helpers/generate.JWT.js";

export const login = async (req,res=response) =>{
    try {
        const {usuario, password} = req.body;
        const db = await conection();
        const user = await db.Usuarios.findOne({usuario: usuario})

        if (!user){
            return res.status(400).json({
                msg: "User not found"
            })
        }

        if (!user.estado){
            return res.status(400).json({
                msg:"Estado Inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword){
            return res.status(400).json({
                msg:"Password Incorrecto"
            })
        }

        const token = await generateJWT(user._id)
        res.cookie("token", token)
        res.cookie("idCokki", user._id)

        res.json({
           user,
           token
        })

    } catch (error) {
        console.log(error);
        return res.json({
            msg:"contacte al servicio tecnico"
        })
    }
}