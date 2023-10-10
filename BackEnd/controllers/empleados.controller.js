import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";

export const getEmpleado = async (req, res) => {
  try {
    const empleadoDB = (await conection()).Empleados;
    const empleado = await empleadoDB.find({}).toArray();
    res.json(empleado);
  } catch (error) {
    console.log(error);
  }
};

export const postEmpleado = async (req, res) => {
  try {
    const {
      Nombre,
      Apellido,
      Telefono,
      Cargo,
      Email,
      TipoDeDocumento,
      DNI,
      Direccion,
      Imagen,
    } = req.body;
    const db = await conection();

    const searchCargo = new ObjectId(Cargo);

    const cargo = await db.Cargos.findOne({ _id: searchCargo });

    if (!cargo) {
      return res.status(404).json({ error: "Cargo no encontrado" });
    }
    const nuevoEmpleado = {
      Nombre,
      Apellido,
      Telefono: Number(Telefono),
      Cargo: cargo._id,
      Email,
      TipoDeDocumento,
      DNI: Number(DNI),
      Direccion,
      Imagen,
      estado: true,
    };
    await db.Empleados.insertOne(nuevoEmpleado);

    res.json(nuevoEmpleado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al agregar al empleado" });
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoId = new ObjectId(id);
    const empleadosDB = (await conection()).Empleados;
    const empleado = await empleadosDB.findOne({
      _id: empleadoId,
    });
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }
    await empleadosDB.updateOne(
      { _id: empleadoId },
      { $set: { estado: false } }
    );
    res.json({ message: "Se ha elimenado el empleado", empleado });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Hubo un error al eliminar al empleado de la database" });
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoId = new ObjectId(id);
    const empleadosDB = (await conection()).Empleados;

    const {
      Nombre,
      Apellido,
      Telefono,
      Cargo,
      Email,
      TipoDeDocumento,
      DNI,
      Direccion,
      Imagen,
    } = req.body;
    const db = await conection();

    const searchCargo = new ObjectId(Cargo);

    const cargo = await db.Cargos.findOne({ _id: searchCargo });

    if (!cargo) {
      return res.status(404).json({ error: "Cargo no encontrado" });
    }

    await empleadosDB.updateOne(
      { _id: empleadoId },
      {
        $set: {
          Nombre,
          Apellido,
          Telefono: Number(Telefono),
          Cargo: cargo._id,
          Email,
          TipoDeDocumento,
          DNI: Number(DNI),
          Direccion,
          Imagen,
        },
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al Actualizar al empleado" });
  }
};
