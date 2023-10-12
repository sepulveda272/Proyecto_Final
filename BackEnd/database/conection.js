import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;
const nombreDB = process.env.BDKEY;
const client = new MongoClient(url);
const conection = async () =>{
    try {
        await client.connect();
        const db = client.db(nombreDB);
        const colections = {
            Empleados: db.collection("Empleados"),
            Indicadores: db.collection("Indicadores"),
            Paneles: db.collection("Paneles"),
            Reportes: db.collection("Reportes"),
            Usuarios: db.collection("Usuarios"),
            Cargos: db.collection("Cargos")
        };
        console.log("Coneccion Exitosa");
        return colections;
    } catch (error) {
        console.log(error);
        throw new Error("Paila no se pudo conectar a la db")
    }
}

export {conection, client}