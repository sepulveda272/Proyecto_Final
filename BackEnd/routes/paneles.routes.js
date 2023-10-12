import { Router } from "express";
import { getPaneles, postPanel,deletePanel, updatePanel } from "../controllers/paneles.controller.js";
import {validateJWT} from "../middlewares/validate.jwt.js"
import validateDocuments from '../middlewares/validate.documents.js'
import { check } from "express-validator";

const router = Router();

router.get("/",[
   validateJWT,
   validateDocuments
], getPaneles);
router.post("/", [
   validateJWT,
   check("Nombre","Nombre es obligatorio").not().isEmpty(),
   check("Descricao","Descricao es obligatorio").not().isEmpty(),
   validateDocuments
],postPanel);
router.delete("/:id", [
   validateJWT,
   validateDocuments
],deletePanel);
router.put("/:id", updatePanel)

/**
 * @swagger
 * components:
 *  schemas:
 *      Paneles:
 *          type: object
 *          properties:
 *              Nombre:
 *                  type: string
 *                  description: nombre del panel
 *              Descricao:
 *                  type: string
 *                  description: Descripcion del panel
 *              estado:
 *                  type: boolean
 *                  description: estado del panel
 *          required:
 *              - Nombre
 *              - Descricao
 *              - estado
 *          example:
 *              Nombre: "Prueba"
 *              Descricao: "lorem"
 *              estado: true
 */

/**
 * @swagger
 * /paneles/:
 *  get:
 *      summary: Retornar todos los Paneles
 *      tags: [Paneles]
 *      responses:
 *          200:
 *              description: Todos los Paneles encontrados!
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Paneles'
 */

/**
 * @swagger
 * /paneles/:
 *  post:
 *      summary: Create new Paneles 
 *      tags: [Paneles]
 *      requestBody:
 *          required: true 
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Paneles'
 *      responses:
 *          200:
 *              description: Nuevo Paneles fue creado!
 */

    //! DELETE

 /**
 * @swagger
 * /paneles/{id}:
 *  delete:
 *      summary: Eliminar un Paneles
 *      tags: [Paneles]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: string
 *            required: true
 *            description: el Paneles id
 *      responses:
 *          200:
 *              description: Paneles eliminado
 *          404:
 *              description: Paneles no encontrado
 */

/**
* @swagger
* /paneles/{id}:
*  put:
*      summary: Actualizar un Paneles
*      tags: [Paneles]
*      parameters:
*          - in: path
*            name: id
*            schema: 
*                type: string
*            required: true
*            description: el Paneles id
*      requestBody:
*          required: true 
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      $ref: '#/components/schemas/Paneles'
*      responses:
*          200:
*              description: Paneles Actualizado
*          404:
*              description: Paneles no encontrado
*/

export default router;