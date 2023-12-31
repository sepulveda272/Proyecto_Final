import { ObjectId } from "mongodb";
import { conection } from "../database/conection.js";
import bcryptjs from "bcryptjs";

export const getUsuario = async (req, res) => {
  try {
    const usuarioDB = (await conection()).Usuarios;

    const usuarios = await usuarioDB.aggregate([
      {
        $lookup: {
          from: 'Empleados', // Nombre de la colección de empleados
          localField: 'Empleado',
          foreignField: '_id',
          as: 'empleadoInfo'
        }
      },
      { 
        $project: {
          usuario: 1,
          password: 1,
          estado: 1,
          empleadoInfo: 1
        }
      }
    ]).toArray();

    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al mostrar a los usuarios" });
  }
};

export const getUsuarioPorId = async (req, res) => {
  try {
    const usuarioDB = (await conection()).Usuarios;
    const usuarioId = req.params.id; // Obtén el ID de los parámetros de la URL

    const usuario = await usuarioDB.aggregate([
      {
        $match: { _id: new ObjectId(usuarioId) }
      },
      {
        $lookup: {
          from: 'Empleados', // Nombre de la colección de empleados
          localField: 'Empleado',
          foreignField: '_id',
          as: 'empleadoInfo'
        }
      },
      {
        $project: {
          usuario: 1,
          password: 1,
          estado: 1,
          empleadoInfo: 1
        }
      }
    ]).toArray();

    if (!usuario || !usuario.length) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(usuario[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al buscar al usuario" });
  }
};

export const postUsuario = async (req, res) => {
  try {
    const { usuario, password, Empleado } = req.body;
    const db = await conection();

    const searchEmpleado = new ObjectId(Empleado);

    const empleado = await db.Empleados.findOne({ _id: searchEmpleado });

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

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioId = new ObjectId(id);
    const { usuario, password, Empleado } = req.body;
    const usuariosDB = (await conection()).Usuarios;

    const usuarioss = await usuariosDB.findOne({
      _id: usuarioId,
    });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const db = await conection();
    const searchEmpleado = new ObjectId(Empleado);
    const empleado = await db.Empleados.findOne({ _id: searchEmpleado });

    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    const salt = bcryptjs.genSaltSync();
    req.body.password = bcryptjs.hashSync(password, salt);

    usuariosDB.insertOneupdateOne(
      { _id: usuarioId },
      {
        $set: {
          Empleado: empleado._id,
          usuario,
          password: req.body.password,
        },
      }
    );
    res.json({ message: "Se ha desactivado el usuario", usuarioss });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Hubo un error al actualizar el usuario de la database" });
  }
};
