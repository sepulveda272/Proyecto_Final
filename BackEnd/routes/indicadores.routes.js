import { Router } from "express";
import { getIndicadores, postIndicador, deleteIndicador, updateIndicador } from "../controllers/indicadores.controller.js";

const router = Router();

router.get("/", getIndicadores);
router.post("/", postIndicador);
router.delete("/:id", deleteIndicador);
router.put("/:id", updateIndicador)

export default router;