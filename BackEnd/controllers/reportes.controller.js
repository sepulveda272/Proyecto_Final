import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";

export const getReportes = async (req, res) => {
  try {
    const reportesDB = (await conection()).Reportes;
    const reporte = await reportesDB.find({ estado: true }).toArray();
    res.json(reporte);
  } catch (error) {
    console.log(error);
  }
};

export const postResporte = async (req, res) => {
  try {
    const {
      NombreReporte,
      DescripcionReporte,
      FechaEncuentro,
      Reparacion,
      Reparado,
      Indicadores,
    } = req.body;
    let { FechaReparacion } = req.body;
    const db = await conection();

    const searchEmpleado = new ObjectId(Indicadores);

    const indicador = await db.Indicadores.findOne({ _id: searchEmpleado });

    if (!Reparado) {
      FechaReparacion = null;
    }

    if (!indicador) {
      return res.status(404).json({ error: "Indicador no encontrado" });
    }
    const nuevoReporte = {
      NombreReporte,
      DescripcionReporte,
      FechaEncuentro: new Date(FechaEncuentro),
      Reparacion: Number(Reparacion),
      Reparado,
      FechaReparacion,
      Indicadores: indicador._id,
      estado: true,
    };
    await db.Reportes.insertOne(nuevoReporte);

    res.json(nuevoReporte);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al agregar el reporte" });
  }
};

export const deleteReporte = async (req, res) => {
  try {
    const { id } = req.params;
    const reporteId = new ObjectId(id);
    const reporteDB = (await conection()).Reportes;
    const reporte = await reporteDB.findOne({
      _id: reporteId,
    });
    if (!reporte) {
      return res.status(404).json({ error: "Reporte no encontrado" });
    }
    await reporteDB.updateOne({ _id: reporteId }, { $set: { estado: false } });
    res.json({ message: "Se ha desactivado el reporte", reporte });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Hubo un error al eliminar el reporte de la database" });
  }
};

export const updateReporte = async (req, res) => {
  try {
    const { id } = req.params;
    const reporteId = new ObjectId(id);
    const reporteDB = (await conection()).Reportes;
    const reporte = await reporteDB.findOne({
      _id: reporteId,
    });
    if (!reporte) {
      return res.status(404).json({ error: "Reporte no encontrado" });
    }

    const {
      NombreReporte,
      DescripcionReporte,
      FechaEncuentro,
      Reparacion,
      Reparado,
      Indicadores,
    } = req.body;
    let { FechaReparacion } = req.body;

    const db = await conection();
    const searchEmpleado = new ObjectId(Indicadores);
    const indicador = await db.Indicadores.findOne({ _id: searchEmpleado });

    if (!Reparado) {
      FechaReparacion = null;
    }

    if (!indicador) {
      return res.status(404).json({ error: "Indicador no encontrado" });
    }

    await reporteDB.updateOne(
      { _id: reporteId },
      {
        $set: {
          NombreReporte,
          DescripcionReporte,
          FechaEncuentro: new Date(FechaEncuentro),
          Reparacion: Number(Reparacion),
          Reparado,
          FechaReparacion,
          Indicadores: indicador._id,
        },
      }
    );
    res.json({ message: "Se ha actualizado el reporte", reporte });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al Actualizar el reporte" });
  }
};
