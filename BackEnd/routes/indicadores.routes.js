import { Router } from "express";
import { getIndicadores, postIndicador, deleteIndicador, updateIndicador } from "../controllers/indicadores.controller.js";
import {validateJWT} from "../middlewares/validate.jwt.js"
import validateDocuments from '../middlewares/validate.documents.js'
import { check } from "express-validator";

const router = Router();

router.get("/", getIndicadores);
router.post("/", [
    validateJWT,
    check("Indicador","Indicador es obligatorio").not().isEmpty(),
    check("Descripcion","Descripcion es obligatorio").not().isEmpty(),
    check("Categoria","Categoria es obligatorio").not().isEmpty(),
    check("FechaInicio","FechaInicio es obligatorio").not().isEmpty(),
    check("FechaFinal","FechaFinal es obligatorio").not().isEmpty(),
    check("Formula","Formula es obligatorio").not().isEmpty(),
    check("Frecuencia","Frecuencia es obligatorio").not().isEmpty(),
    check("Cumplimiento","Cumplimiento es obligatorio").not().isEmpty(),
    check("Area","Area es obligatorio").not().isEmpty(),
    check('Empleados', 'No es un ID válido').isMongoId(),
    check("Tareas","Tareas es obligatorio").not().isEmpty(),
    check('Panel', 'No es un ID válido').isMongoId(),
    validateDocuments
],postIndicador);
router.delete("/:id", [
    validateJWT,
    validateDocuments
],deleteIndicador);
router.put("/:id", updateIndicador)

/**
 * @swagger
 * components:
 *  schemas:
 *      Indicadores:
 *          type: object
 *          properties:
 *              Indicador:
 *                  type: string
 *                  description: Indicador del indicador
 *              Descripcion:
 *                  type: string
 *                  description: Descripcion del indicador
 *              Categoria:
 *                  type: string
 *                  description: Categoria del indicador
 *              FechaInicio:
 *                  type: Date
 *                  description: FechaInicio de indicador
 *              FechaFinal:
 *                  type: Date
 *                  description: FechaFinal del indicador
 *              Formula:
 *                  type: string
 *                  description: Formula del indicador
 *              Frecuencia:
 *                  type: string
 *                  description: Frecuencia del indicador
 *              Cumplimiento:
 *                  type: integer
 *                  description: Cumplimiento del indicador
 *              Area:
 *                  type: string
 *                  description: Area del indicador
 *              Empleados:
 *                  type: array
 *                  description: Empleados del indicador
 *              Tareas:
 *                  type: array
 *                  description: Tareas del indicador
 *              Panel:
 *                  type: ObjectId
 *                  description: Panel del indicador
 *              estado:
 *                  type: boolean
 *                  description: estado del indicador
 *          required:
 *              - Indicador
 *              - Descripcion
 *              - Categoria
 *              - FechaInicio
 *              - FechaFinal
 *              - Formula
 *              - Frecuencia
 *              - Cumplimiento
 *              - Area
 *              - Empleados
 *              - Tareas
 *              - Panel
 *              - estado
 *          example:
 *              Indicador: Prueba
 *              Descripcion: Aprueba
 *              Categoria: BAJA
 *              FechaInicio: 2021-12-05
 *              FechaFinal: 2021-12-05
 *              Formula: Met.Agil
 *              Frecuencia: 1/4
 *              Cumplimiento: 50
 *              Area: Prueba
 *              Empleados: ["652636ae8ce838285464ed98","652636408ce838285464ed97"]
 *              Tareas: ["nose","ando probando"]
 *              Panel: 65259141efc89c4ffa78a279
 *              estado: true
 */

/**
 * @swagger
 * /indicadores/:
 *  get:
 *      summary: Retornar todos los Indicadores
 *      tags: [Indicadores]
 *      responses:
 *          200:
 *              description: Todos los Indicadores encontrados!
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Indicadores'
 */

/**
 * @swagger
 * /indicadores/:
 *  post:
 *      summary: Create new Indicadores 
 *      tags: [Indicadores]
 *      requestBody:
 *          required: true 
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Indicadores'
 *      responses:
 *          200:
 *              description: Nuevo Indicadores fue creado!
 */

    //! DELETE

 /**
 * @swagger
 * /indicadores/{id}:
 *  delete:
 *      summary: Eliminar un Indicadores
 *      tags: [Indicadores]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: string
 *            required: true
 *            description: el Indicadores id
 *      responses:
 *          200:
 *              description: Indicadores eliminado
 *          404:
 *              description: Indicadores no encontrado
 */


/**
* @swagger
* /indicadores/{id}:
*  put:
*      summary: Actualizar un Indicadores
*      tags: [Indicadores]
*      parameters:
*          - in: path
*            name: id
*            schema: 
*                type: string
*            required: true
*            description: el Indicadores id
*      requestBody:
*          required: true 
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      $ref: '#/components/schemas/Indicadores'
*      responses:
*          200:
*              description: Indicadores Actualizado
*          404:
*              description: Indicadores no encontrado
*/

export default router;