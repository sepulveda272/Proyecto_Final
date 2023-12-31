import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";

export const getIndicadores = async (req, res) => {
  try {
    const indicadorDB = (await conection()).Indicadores;
    const indicadores = await indicadorDB.find({ estado: true }).toArray();
    res.json(indicadores);
  } catch (error) {
    console.log(error);
  }
};


export const postIndicador = async (req, res) => {
  try {
    const {
      Indicador,
      Descripcion,
      Categoria,
      FechaInicio,
      FechaFinal,
      Formula,
      Frecuencia,
      Cumplimiento,
      Area,
      Empleados,
      Tareas,
      Panel,
    } = req.body;
    const db = await conection();

    const searchPanel = new ObjectId(Panel);

    const panel = await db.Paneles.findOne({ _id: searchPanel });

    if (!panel) {
      return res.status(404).json({ error: "Panel no encontrado" });
    }

    const empleadoIds = [];

    for (const empleadoId of Empleados) {
      const searchEmpleado = new ObjectId(empleadoId);
      const empleado = await db.Empleados.findOne({ _id: searchEmpleado });

      if (empleado) {
        empleadoIds.push(empleado._id);
      } else {
        return res
          .status(404)
          .json({ error: `El empleado "${empleadoId}" no fue encontrado` });
      }
    }

    const nuevoIndicador = {
      Indicador,
      Descripcion,
      Categoria,
      FechaInicio: new Date(FechaInicio),
      FechaFinal: new Date(FechaFinal),
      Formula,
      Frecuencia,
      Cumplimiento: Number(Cumplimiento),
      Area,
      Empleados: empleadoIds,
      Tareas,
      Panel: panel._id,
      estado: true,
    };
    await db.Indicadores.insertOne(nuevoIndicador);

    res.json(nuevoIndicador);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al agregar el indicador" });
  }
};

export const deleteIndicador = async (req, res) => {
  try {
    const { id } = req.params;
    const indicadorId = new ObjectId(id);
    const indicadoresDB = (await conection()).Indicadores;
    const indicador = await indicadoresDB.findOne({
      _id: indicadorId,
    });
    if (!indicador) {
      return res.status(404).json({ error: "Indicador no encontrado" });
    }
    await indicadoresDB.updateOne(
      { _id: indicadorId },
      { $set: { estado: false } }
    );
    res.json({ message: "Se ha desactivado el Indicador", indicador });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Hubo un error al eliminar el indicador de la database" });
  }
};

export const updateIndicador = async (req, res) => {
  try {
    const { id } = req.params;
    const indicadorId = new ObjectId(id);
    const indicador = await indicadoresDB.findOne({
      _id: indicadorId,
    });
    if (!indicador) {
      return res.status(404).json({ error: "Indicador no encontrado" });
    }
    const {
        Indicador,
        Descripcion,
        Categoria,
        FechaInicio,
        FechaFinal,
        Formula,
        Frecuencia,
        Cumplimiento,
        Area,
        Empleados,
        Tareas,
        Panel,
    } = req.body;
    const indicadoresDB = (await conection()).Indicadores;
    const db = await conection();
    
    const searchPanel = new ObjectId(Panel);
    
    const panel = await db.Paneles.findOne({ _id: searchPanel });
    
    if (!panel) {
        return res.status(404).json({ error: "Panel no encontrado" });
    }
    
    const empleadoIds = [];
    
    for (const empleadoId of Empleados) {
        const searchEmpleado = new ObjectId(empleadoId);
        const empleado = await db.Empleados.findOne({ _id: searchEmpleado });
        
        if (empleado) {
            empleadoIds.push(empleado._id);
        } else {
            return res
            .status(404)
            .json({ error: `El empleado "${empleadoId}" no fue encontrado` });
        }
    }
    
    await indicadoresDB.updateOne(
      { _id: indicadorId },
      { $set: { 
        Indicador,
        Descripcion,
        Categoria,
        FechaInicio: new Date(FechaInicio),
        FechaFinal: new Date(FechaFinal),
        Formula,
        Frecuencia,
        Cumplimiento: Number(Cumplimiento),
        Area,
        Empleados: empleadoIds,
        Tareas,
        Panel: panel._id,
       } }
    );
    res.json({ message: "Se ha actualizado el Indicador", indicador });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al Actualizar el indicador" });
  }
};
