import { Router } from "express";
import { getEmpleado, postEmpleado, deleteEmpleado, updateEmpleado } from "../controllers/empleados.controller.js";

const router = Router();

router.get("/", getEmpleado);
router.post("/", postEmpleado);
router.delete("/:id", deleteEmpleado);
router.put("/:id", updateEmpleado)

/**
 * @swagger
 * components:
 *  schemas:
 *      Empleados:
 *          type: object
 *          properties:
 *              Nombre:
 *                  type: string
 *                  description: nombre del empleado
 *              Apellido:
 *                  type: string
 *                  description: Apellido del empleado
 *              Telefono:
 *                  type: string
 *                  description: Telefono del empleado
 *              Cargo:
 *                  type: ObjectId
 *                  description: Cargo de empleado
 *              Email:
 *                  type: string
 *                  description: Email del empleado
 *              TipoDeDocumento:
 *                  type: string
 *                  description: TipoDeDocumento del empleado
 *              DNI:
 *                  type: string
 *                  description: DNI del empleado
 *              Direccion:
 *                  type: string
 *                  description: Direccion del empleado
 *              Imagen:
 *                  type: string
 *                  description: Imagen del empleado
 *              estado:
 *                  type: boolean
 *                  description: estado del empleado
 *          required:
 *              - Nombre
 *              - Apellido
 *              - Telefono
 *              - Cargo
 *              - Email
 *              - TipoDeDocumento
 *              - DNI
 *              - Direccion
 *              - Imagen
 *              - estado
 *          example:
 *              Nombre: "Juan"
 *              Apellido: "Sepulveda"
 *              Telefono: "123457890"
 *              Cargo: "Gerente"
 *              Email: "juan@gmial.com"
 *              TipoDeDocumento: "Cédula de Ciudadanía"
 *              DNI: "0123456789"
 *              Direccion: "Avenida 245, Bogotá, Colombia"
 *              Imagen: "https://i.pinimg.com/originals/23/d8/ec/23d8ec34996d8cb5749d40bc8322b464.jpg"
 *              estado: true
 */

/**
 * @swagger
 * /empleados/:
 *  get:
 *      summary: Retornar todos los Empleados
 *      tags: [Empleados]
 *      responses:
 *          200:
 *              description: Todos los Empleados encontrados!
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Empleados'
 */

/**
 * @swagger
 * /empleados/:
 *  post:
 *      summary: Create new Empleados 
 *      tags: [Empleados]
 *      requestBody:
 *          required: true 
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Empleados'
 *      responses:
 *          200:
 *              description: Nuevo Empleados fue creado!
 */

    //! DELETE

 /**
 * @swagger
 * /empleados/{id}:
 *  delete:
 *      summary: Eliminar un Empleados
 *      tags: [Empleados]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: string
 *            required: true
 *            description: el Empleados id
 *      responses:
 *          200:
 *              description: Empleados eliminado
 *          404:
 *              description: Empleados no encontrado
 */


export default router;