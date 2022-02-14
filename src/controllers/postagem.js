import postagemDomain from '../domain/postagem';

/**
 * @description: chama função correspondente no domínio e retorna resultado da listagem
 * @returns arrays de postagens
 */
const listar = (req, res) => {
  try {
    postagemDomain.listar(req, res).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar listar postagens. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: Obtem uma postagem salva
 * @returns postagem
 */
const obter = (req, res) => {
  try {
    postagemDomain.listar(req, res).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar obter a postagem pelo id. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: chama função correspondente no domínio e retorna resultado alteração
 * @returns boolean se conseguiu alterar
 */
const alterar = (req, res) => {
  try {
    postagemDomain.alterar(req, res).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar modificar postagem. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: chama função criar do domínio e retorna postagem criada
 * @returns postagem criado
 */
const criar = (req, res) => {
  try {
    postagemDomain.criar(req, res).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar criar nova postagem. Contate o suporte técnico!'
      );
  }
};

/**
 * @description: chama função excluir do domínio e retorna postagem excluir
 * @returns postagem excluido
 */
const excluir = (req, res) => {
  try {
    postagemDomain.excluir(req, res).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    res
      .status(500)
      .send(
        'Erro inexperado ao tentar excluir a postagem. Contate o suporte técnico!'
      );
  }
};

export default { listar, obter, criar, alterar, excluir };
