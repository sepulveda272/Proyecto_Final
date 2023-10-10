import { Router } from "express";
import { getPaneles, postPanel,deletePanel } from "../controllers/paneles.controller.js";

const router = Router();

router.get("/", getPaneles);
router.post("/", postPanel);
router.delete("/:id", deletePanel);

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

export default router;