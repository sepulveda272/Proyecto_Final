import { Router } from "express";
import { getUsuario,postUsuario,deleteUsuario, updateUsuario } from "../controllers/usuario.controller.js";
import {validateJWT} from "../middlewares/validate.jwt.js"
import validateDocuments from '../middlewares/validate.documents.js'
import { check } from "express-validator";

const router = Router();

router.get("/", getUsuario);
router.post("/", [
   validateJWT,
   check('Empleado', 'No es un ID válido').isMongoId(),
   check("usuairo","usuairo es obligatorio").not().isEmpty(),
   check("password","password es obligatorio").not().isEmpty(),
   validateDocuments
],postUsuario);
router.delete("/:id", [
   validateJWT,
   validateDocuments
],deleteUsuario);
router.put("/:id",updateUsuario)

/**
 * @swagger
 * components:
 *  schemas:
 *      Usuarios:
 *          type: object
 *          properties:
 *              Empleado:
 *                  type: ObjectId
 *                  description: id de empleado
 *              usuairo:
 *                  type: string
 *                  description: usuairo del gerente
 *              password:
 *                  type: string
 *                  description: password del usuario
 *              estado:
 *                  type: boolean
 *                  description: estado del usuario
 *          required:
 *              - Empleado
 *              - usuairo
 *              - password
 *              - estado
 *          example:
 *              Empleado: "652636ae8ce838285464ed98"
 *              usuario: "Prueba"
 *              password: "123456"
 *              estado: true
 */

/**
 * @swagger
 * /usuarios/:
 *  get:
 *      summary: Retornar todos los Usuarios
 *      tags: [Usuarios]
 *      responses:
 *          200:
 *              description: Todos los Usuarios encontrados!
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usuarios'
 */

/**
 * @swagger
 * /usuarios/:
 *  post:
 *      summary: Create new Usuarios 
 *      tags: [Usuarios]
 *      requestBody:
 *          required: true 
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Usuarios'
 *      responses:
 *          200:
 *              description: Nuevo Usuarios fue creado!
 */

    //! DELETE

 /**
 * @swagger
 * /usuarios/{id}:
 *  delete:
 *      summary: Eliminar un Usuarios
 *      tags: [Usuarios]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: string
 *            required: true
 *            description: el Usuarios id
 *      responses:
 *          200:
 *              description: Usuarios eliminado
 *          404:
 *              description: Usuarios no encontrado
 */

/**
* @swagger
* /usuarios/{id}:
*  put:
*      summary: Actualizar un Usuarios
*      tags: [Usuarios]
*      parameters:
*          - in: path
*            name: id
*            schema: 
*                type: string
*            required: true
*            description: el Usuarios id
*      requestBody:
*          required: true 
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      $ref: '#/components/schemas/Usuarios'
*      responses:
*          200:
*              description: Usuarios Actualizado
*          404:
*              description: Usuarios no encontrado
*/

export default router;