import servicoDomain from '../repository/servico';

/**
 * @description: chama função correspondente no domínio e retorna resultado da listagem
 * @returns arrays de serviços
 */
const listar = (req, res) => {
  try {
    servicoDomain.listar().then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar listar serviços. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: Obtem um servico salva
 * @returns servico
 */
const obter = (req, res) => {
  try {
    servicoDomain.obter(req.params.id).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar obter o servico pelo id. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: chama função correspondente no domínio e retorna resultado alteração
 * @returns boolean se conseguiu alterar
 */
const alterar = (req, res) => {
  try {
    servicoDomain.alterar(req.body.servico).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar modificar servico. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: chama função criar do domínio e retorna servico criada
 * @returns servico criado
 */
const criar = (req, res) => {
  try {
    servicoDomain.criar(req.body.servico).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar criar novo servico. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: chama função excluir do domínio e retorna servico excluir
 * @returns servico excluido
 */
const excluir = (req, res) => {
  try {
    servicoDomain
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
        'Erro inexperado ao tentar excluir o servico. Contate o suporte técnico!'
      );
  }
};

export default { listar, obter, criar, alterar, excluir };
