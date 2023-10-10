import { Router } from "express";
import { getReportes, postResporte, deleteReporte } from "../controllers/reportes.controller.js";

const router = Router();

router.get("/", getReportes);
router.post("/", postResporte);
router.delete("/:id", deleteReporte);

export default router;