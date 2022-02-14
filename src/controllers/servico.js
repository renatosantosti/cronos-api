import database from '../../config/database';

import database from '../../config/database';

/**
 * @description: chama função correspondente no domínio e retorna resultado da listagem
 * @returns arrays de serviços
 */
const listar = (req, res) => {
  return [];
};

/**
 * @description: chama função correspondente no domínio e retorna resultado alteração
 * @returns boolean se conseguiu alterar
 */
const alterar = (req, res) => {
  return modelo;
};

/**
 * @description: chama função criar do domínio e retorna serviço criado
 * @returns serviço criado
 */
const criar = (req, res) => {
  return modelo;
};

/**
 * @description: chama função excluir do domínio e retorna serviço excluir
 * @returns serviço excluido
 */
const excluir = (req, res) => {
  const resultado = true;
  return resultado;
};

export default { listar, criar, alterar, excluir };
