import { Router } from 'express';
import { obterBibliotecaCompleta } from '../controllers/IntegracaoController.js';

const router = Router();

// Rota de teste
router.get('/', obterBibliotecaCompleta);

export default router;
