import express from 'express';

import servicoController from '../controllers/servico';

const router = express.Router();

/**
 * Obtem a listagem de serviços
 * */
router.get('/', (req, res) => {
  servicoController.listar(req, res);
});

/**
 * Obtem um serviço pelo id
 */
router.get('/:id', (req, res) => {
  servicoController.obter(req, res);
});

/**
 * Cria um serviço
 */
router.put('/', (req, res) => {
  servicoController.criar(req, res);
});

/**
 * Altera um serviço existente
 */
router.post('/', (req, res) => {
  servicoController.alterar(req, res);
});

/**
 * Exclui um serviço com o id informado
 */
router.delete('/:id', (req, res) => {
  servicoController.excluir(req, res);
});

export default router;
