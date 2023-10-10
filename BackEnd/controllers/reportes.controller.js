import { ObjectId } from "mongodb";
import { client, conection} from "../database/conection.js";

export const getReportes = async (req, res) => {
    try {
        const reportesDB = (await conection()).Reportes;
        const reporte = await reportesDB.find({}).toArray();
        res.json(reporte);
    } catch (error) {
        console.log(error);
    }
};

export const postResporte = async (req, res) => {
    try {
        const { NombreReporte,DescripcionReporte,FechaEncuentro,Reparacion,Reparado,FechaReparacion,Indicadores } = req.body;
        const db = await conection();
        const indicador = await db.Indicadores.findOne({ Indicador: Indicadores });

        if (!indicador) {
            return res.status(404).json({ error: "Indicador no encontrado" });
        }
        const nuevoReporte = {
            NombreReporte,
            DescripcionReporte,
            FechaEncuentro,
            Reparacion,
            Reparado,
            FechaReparacion,
            Indicadores: {
                $oid: indicador._id
            },
            estado: true
        };
        await db.Reportes.insertOne(nuevoReporte);

        res.json(nuevoReporte);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hubo un error al agregar el reporte" });
    }
}

export const deleteReporte = async (req, res) => {
    try {
        const { id } = req.params;
        const reporteId = new ObjectId(id);
        const reporteDB = (await conection()).Reportes;
        const reporte = await reporteDB.findOne({
            _id: reporteId
        });
        if (!reporte) {
            return res.status(404).json({ error: "Reporte no encontrado" });
        }
        await reporteDB.updateOne(
            { _id: reporteId },
            { $set: { estado: false } }
        );
        res.json({ message: "Se ha desactivado el reporte", reporte });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hubo un error al eliminar el reporte de la database" });
    }
};
