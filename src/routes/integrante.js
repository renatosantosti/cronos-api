import express from 'express';

import integranteController from '../controllers/integrante';

const router = express.Router();

/**
 * Obtem a listagem de postagens'
 * */
router.get('/', (req, res) => {
  integranteController.listar(req, res);
});

/**
 * Obtem um integrante pelo id
 */
router.get('/:id', (req, res) => {
  integranteController.obter(req, res);
});

/**
 * Cria um novo integrante
 */
router.put('/', (req, res) => {
  integranteController.criar(req, res);
});

/**
 * Altera um integrante existente
 */
router.post('/', (req, res) => {
  integranteController.alterar(req, res);
});

/**
 * Exclui um integrante com o id informado
 */
router.delete('/:id', (req, res) => {
  integranteController.excluir(req, res);
});

export default router;
