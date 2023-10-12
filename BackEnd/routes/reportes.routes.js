import { Router } from "express";
import { getReportes, postResporte, deleteReporte, updateReporte } from "../controllers/reportes.controller.js";
import {validateJWT} from "../middlewares/validate.jwt.js"
import validateDocuments from '../middlewares/validate.documents.js'
import { check } from "express-validator";

const router = Router();

router.get("/",[
    validateJWT,
    validateDocuments
 ], getReportes);
router.post("/", [
    validateJWT,
    check("NombreReporte","NombreReporte es obligatorio").not().isEmpty(),
    check("DescripcionReporte","DescripcionReporte es obligatorio").not().isEmpty(),
    check("FechaEncuentro","FechaEncuentro es obligatorio").not().isEmpty(),
    check("Reparacion","Reparacion es obligatorio").not().isEmpty(),
    check('Indicadores', 'No es un ID válido').isMongoId(),
    validateDocuments
],postResporte);
router.delete("/:id",[
    validateJWT,
    validateDocuments
], deleteReporte);
router.put("/:id", updateReporte)

/**
 * @swagger
 * components:
 *  schemas:
 *      Reportes:
 *          type: object
 *          properties:
 *              NombreReporte:
 *                  type: string
 *                  description: NombreReporte del reportes
 *              DescripcionReporte:
 *                  type: string
 *                  description: DescripcionReporte del reportes
 *              FechaEncuentro:
 *                  type: Date
 *                  description: FechaEncuentro del reportes
 *              Reparacion:
 *                  type: integer
 *                  description: Reparacion de reportes
 *              Reparado:
 *                  type: boolean
 *                  description: Reparado de reportes
 *              FechaReparacion:
 *                  type: Date
 *                  description: FechaReparacion de reportes
 *              Indicadores:
 *                  type: Date
 *                  description: Indicadores del reportes
 *              estado:
 *                  type: boolean
 *                  description: estado del reportes
 *          required:
 *              - NombreReporte
 *              - DescripcionReporte
 *              - FechaEncuentro
 *              - Reparacion
 *              - Reparado
 *              - FechaReparacion
 *              - Indicadores
 *              - estado
 *          example:
 *              NombreReporte: Prueba
 *              DescripcionReporte: Aprueba
 *              FechaEncuentro: 2021-12-05
 *              Reparacion: 120
 *              Reparado: false
 *              FechaReparacion: 2021-12-05
 *              Indicadores: 65265a2f5c5c85b826e4ed75
 *              estado: true
 */

/**
 * @swagger
 * /reportes/:
 *  get:
 *      summary: Retornar todos los Reportes
 *      tags: [Reportes]
 *      responses:
 *          200:
 *              description: Todos los Reportes encontrados!
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Reportes'
 */

/**
 * @swagger
 * /reportes/:
 *  post:
 *      summary: Create new Reportes 
 *      tags: [Reportes]
 *      requestBody:
 *          required: true 
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Reportes'
 *      responses:
 *          200:
 *              description: Nuevo Reportes fue creado!
 */

    //! DELETE

 /**
 * @swagger
 * /reportes/{id}:
 *  delete:
 *      summary: Eliminar un Reportes
 *      tags: [Reportes]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: string
 *            required: true
 *            description: el Reportes id
 *      responses:
 *          200:
 *              description: Reportes eliminado
 *          404:
 *              description: Reportes no encontrado
 */


/**
* @swagger
* /reportes/{id}:
*  put:
*      summary: Actualizar un Reportes
*      tags: [Reportes]
*      parameters:
*          - in: path
*            name: id
*            schema: 
*                type: string
*            required: true
*            description: el Reportes id
*      requestBody:
*          required: true 
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      $ref: '#/components/schemas/Reportes'
*      responses:
*          200:
*              description: Reportes Actualizado
*          404:
*              description: Reportes no encontrado
*/

export default router;