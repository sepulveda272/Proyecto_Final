import { Router } from "express";
import { getIndicadores, postIndicador, deleteIndicador } from "../controllers/indicadores.controller.js";

const router = Router();

router.get("/", getIndicadores);
router.post("/", postIndicador);
router.delete("/:id", deleteIndicador);

export default router;