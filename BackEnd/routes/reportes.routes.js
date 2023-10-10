import { Router } from "express";
import { getReportes, postResporte, deleteReporte, updateReporte } from "../controllers/reportes.controller.js";

const router = Router();

router.get("/", getReportes);
router.post("/", postResporte);
router.delete("/:id", deleteReporte);
router.put("/:id", updateReporte)

export default router;