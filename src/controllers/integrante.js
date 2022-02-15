import integranteDomain from '../domain/integrante';

/**
 * @description: chama função correspondente no domínio e retorna resultado da listagem
 * @returns arrays de integrantes
 */
const listar = (req, res) => {
  try {
    integranteDomain.listar().then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar listar integrantes. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: Obtem um integrante salva
 * @returns integrante
 */
const obter = (req, res) => {
  try {
    integranteDomain.obter(req.params.id).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar obter o integrante pelo id. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: chama função correspondente no domínio e retorna resultado alteração
 * @returns boolean se conseguiu alterar
 */
const alterar = (req, res) => {
  try {
    integranteDomain.alterar(req.body.integrante).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar modificar integrante. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: chama função criar do domínio e retorna integrante criada
 * @returns integrante criado
 */
const criar = (req, res) => {
  try {
    integranteDomain.criar(req.body.integrante).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar criar novo integrante. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: chama função excluir do domínio e retorna integrante excluir
 * @returns integrante excluido
 */
const excluir = (req, res) => {
  try {
    integranteDomain
      .excluir(req.params.id)
      .then((result) => {
        res.status(200).send({ status: result });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar excluir o integrante. Contate o suporte técnico!'
      );
  }
};

export default { listar, obter, criar, alterar, excluir };
