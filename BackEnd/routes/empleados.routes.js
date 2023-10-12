import { Router } from "express";
import { getEmpleado, postEmpleado, deleteEmpleado, updateEmpleado } from "../controllers/empleados.controller.js";
import { check } from "express-validator";
import {validateJWT} from "../middlewares/validate.jwt.js"
import validateDocuments from '../middlewares/validate.documents.js'

const router = Router();

router.get("/",[
   validateJWT,
   validateDocuments
],getEmpleado);
router.post("/", [
   validateJWT,
   check("Nombre","Nombre es obligatorio").not().isEmpty(),
   check("Apellido","Apellido es obligatorio").not().isEmpty(),
   check("Telefono","Telefono es obligatorio").not().isEmpty(),
   check('Cargo', 'No es un ID válido').isMongoId(),
   check("Email","Email es obligatorio").not().isEmpty(),
   check("TipoDeDocumento","TipoDeDocumento es obligatorio").isIn(["T.I","C.C"]),
   check("DNI","DNI es obligatorio").not().isEmpty(),
   check("Direccion","Direccion es obligatorio").not().isEmpty(),
   check("Imagen","Imagen es obligatorio").not().isEmpty(),
   validateDocuments
],postEmpleado);
router.delete("/:id",[
   validateJWT,
   validateDocuments
], deleteEmpleado);
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
 *                  type: }
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
 *              Nombre: "Prueba"
 *              Apellido: "Aprueba"
 *              Telefono: "123457890"
 *              Cargo: "Gerente"
 *              Email: "Prueba@gmial.com"
 *              TipoDeDocumento: "C.C"
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


/**
* @swagger
* /empleados/{id}:
*  put:
*      summary: Actualizar un Empleados
*      tags: [Empleados]
*      parameters:
*          - in: path
*            name: id
*            schema: 
*                type: string
*            required: true
*            description: el Empleados id
*      requestBody:
*          required: true 
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      $ref: '#/components/schemas/Empleados'
*      responses:
*          200:
*              description: Empleados Actualizado
*          404:
*              description: Empleados no encontrado
*/

export default router;