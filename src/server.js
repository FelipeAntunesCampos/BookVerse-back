import express from 'express';
import 'dotenv/config';
import exemplosRoutes from './routes/exemploRoute.js';
import PersonagemRoute from './routes/PersonagemRoute.js'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('🚀 API funcionando');
});

// Rotas
app.use('/api/exemplos', exemplosRoutes);
app.use('/personagem', PersonagemRoute);

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
