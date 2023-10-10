import { Router } from "express";
import { getPaneles, postPanel,deletePanel } from "../controllers/paneles.controller.js";

const router = Router();

router.get("/", getPaneles);
router.post("/", postPanel);
router.delete("/:id", deletePanel);

export default router;