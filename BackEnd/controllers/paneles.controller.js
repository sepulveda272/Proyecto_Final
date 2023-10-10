import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";

export const getPaneles = async (req, res) => {
  try {
    const panelDB = (await conection()).Paneles;
    const panel = await panelDB.find({}).toArray();
    res.json(panel);
  } catch (error) {
    console.log(error);
  }
};

export const postPanel = async (req, res) => {
  try {
    const { Nombre, Descricao } = req.body;
    const db = await conection();

    const nuevoPanel = {
      Nombre,
      Descricao,
      estado: true,
    };
    await db.Paneles.insertOne(nuevoPanel);

    res.json(nuevoPanel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al agregar el panel" });
  }
};

export const deletePanel = async (req, res) => {
  try {
    const { id } = req.params;
    const panelId = new ObjectId(id);
    const panelesDB = (await conection()).Paneles;
    const panel = await panelesDB.findOne({
      _id: panelId,
    });
    if (!panel) {
      return res.status(404).json({ error: "Panel no encontrado" });
    }
    await panelesDB.updateOne({ _id: panelId }, { $set: { estado: false } });
    res.json({ message: "Se ha elimenado el panel", panel });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Hubo un error al eliminar al panel de la database" });
  }
};
