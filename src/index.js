import express from 'express';
import 'dotenv/config';

import rotas from './routes/index';
const port = process.env.PORT || 8080;

const app = express();

// Adicionando as rotas na aplicação
app.use(rotas);

// Inicia aplicação para ouvir na porta definada ou porta padrão
app.listen(port, () => {
  console.log(`API de Cronos rodando na porta: ${port}`);
});
