import { Router } from "express";
import { getUsuario,postUsuario,deleteUsuario } from "../controllers/usuario.controller.js";

const router = Router();

router.get("/", getUsuario);
router.post("/", postUsuario);
router.delete("/:id", deleteUsuario);

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
 *              Empleado: "Paola"
 *              usuario: "paola"
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

export default router;