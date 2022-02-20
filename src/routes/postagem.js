import express from 'express';

import postagemController from '../controllers/postagem';

const router = express.Router();

/**
 * Obtem a listagem de postagens
 */
router.get('/', (req, res) => {
  postagemController.listar(req, res);
});

/**
 * Obtém uma postagem pelo id
 */
router.get('/:id', (req, res) => {
  postagemController.obter(req, res);
});

/**
 * Cria uma nova postagem
 */
router.put('/', (req, res) => {
  postagemController.criar(req, res);
});

/**
 * Altera uma postagem existente
 */
router.post('/', (req, res) => {
  postagemController.alterar(req, res);
});

/**
 * Exclui a postagem com o id informado
 */
router.delete('/:id', (req, res) => {
  postagemController.excluir(req, res);
});

export default router;
