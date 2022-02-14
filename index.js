import express from 'express';
import 'dotenv/config';

const port = process.env.port;

const app = express();

app.listen(port, () => {
  console.log(`API de Cronos rodando na porta: ${port}`);
});
