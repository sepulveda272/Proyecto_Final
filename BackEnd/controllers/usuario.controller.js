import { ObjectId } from "mongodb";
import { conection } from "../database/conection.js";
import bcryptjs from "bcryptjs";

export const getUsuario = async (req, res) => {
  try {
    const usuarioDB = (await conection()).Usuarios;
    const usuarios = await usuarioDB.find({}).toArray();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al mostrar a los usuarios" });
  }
};

export const postUsuario = async (req, res) => {
  try {
    const { usuario, password, Empleado } = req.body;
    const db = await conection();
    const empleado = await db.Empleados.findOne({ Nombre: Empleado });

    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    const salt = bcryptjs.genSaltSync();
    req.body.password = bcryptjs.hashSync(password, salt);

    const nuevoUsuario = {
      Empleado: empleado._id,
      usuario,
      password: req.body.password,
      estado: true,
    };
    await db.Usuarios.insertOne(nuevoUsuario);

    res.json(nuevoUsuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al agregar el usuario" });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioId = new ObjectId(id);
    const usuariosDB = (await conection()).Usuarios;
    const usuario = await usuariosDB.findOne({
      _id: usuarioId,
    });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    await usuariosDB.updateOne({ _id: usuarioId }, { $set: { estado: false } });
    res.json({ message: "Se ha desactivado el usuario", usuario });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Hubo un error al desactivar el usuario de la database" });
  }
};
