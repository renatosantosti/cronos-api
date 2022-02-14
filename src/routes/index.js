import 'dotenv/config';
import express from 'express';

// Importa as rotas dos serviços disponíveis
import servicosRouters from '../routes/servico';
import postagensRouters from '../routes/postagem';
import integrantesRouters from '../routes/integrantes';

// Importa middleware de autenticação das rotas privadas
import validarAutorizacaoAcesso from '../middleware/autenticacao';

// Importa dependências via require
const cors = require('cors'); // https://expressjs.com/en/resources/middleware/cors.html
const myParser = require('body-parser');

const rotas = express.Router();

/**
 * Trata limitações no HTTP|S
 */

// Bandwidth upload base64
rotas.use(myParser.json({ limit: '200mb' }));
rotas.use(myParser.urlencoded({ limit: '200mb', extended: true }));

//Enable Cors for all domains
rotas.use(cors({ origin: true, credentials: true }));

// Parse URL-encoded bodies (as sent by HTML forms)
rotas.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
rotas.use(express.json());

// rota para verificar status da aplicação. Não requer autenticação
rotas.get('/status', (req, res) => {
  res.status(200).send({ status: true });
});

// Define as rodas dos serviços passando o middleware de para verificar autorização
rotas.use('/servico', validarAutorizacaoAcesso, servicosRouters);
rotas.use('/integrante', validarAutorizacaoAcesso, integrantesRouters);
rotas.use('/postagem', validarAutorizacaoAcesso, postagensRouters);

export default rotas;
