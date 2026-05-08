import { Router } from "express";
import * as SimuladoController from "../controllers/SimuladoController.js";

const router = Router();

router.post("/", SimuladoController.criar);
router.get("/", SimuladoController.buscarTodos);
router.get("/:id", SimuladoController.buscarPorId);
router.put("/:id", SimuladoController.atualizar);
router.delete("/:id", SimuladoController.deletar);

export default router;
