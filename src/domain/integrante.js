import database from '../../config/database';

const prepararModelo = (dado) => {
  return dado;
};

/**
 * @description: realiza pesquisa no banco de dados e retorna os integrantes cadastrados
 * @returns arrays de integrantes
 */
const listar = () => {
  return new Promise((resolve, reject) => {
    database
      .select()
      .from('integrante')
      .then(
        (result) => {
          resolve(result.map((item) => prepararModelo(item)));
        },
        (error) => {
          console.error('Erro ao listar os integrantes', error);
          reject('Erro ao tentar os integrantes:', error);
        }
      );
  });
};

/**
 * @description: realiza pesquisa no banco de dados e retorna os integrantes cadastrados
 * @returns arrays de integrantes
 */
const obter = (id) => {
  return new Promise((resolve, reject) => {
    database
      .select()
      .from('integrante')
      .where('id', id)
      .then(
        (result) => {
          resolve(result[0] ? prepararModelo(result[0]) : false);
        },
        (error) => {
          console.error('Erro ao listar os integrantes', error);
          reject('Erro ao tentar os integrantes:', error);
        }
      );
  });
};

const alterar = (integrante) => {
  delete integrante.data;
  integrante.modificado = new Date();
  return new Promise((resolve, reject) => {
    database('integrante')
      .where('id', '=', integrante.id)
      .update(integrante)
      .then(
        (result) => {
          resolve(prepararModelo(result));
        },
        (error) => {
          console.error('Erro ao atualizar a integrante =>', error);
          reject('Erro ao tentar atualizar a integrante:', error);
        }
      );
  });
};

const criar = (integrante) => {
  return new Promise((resolve, reject) => {
    database('integrante')
      .insert(integrante)
      .then(
        ([id]) => {
          integrante.id = id;
          resolve(prepararModelo(integrante));
        },
        (error) => {
          console.error('Erro tentar criar integrante =>', error);
          reject('Erro ao tentar criar novo integrante:', error);
        }
      );
  });
};

const excluir = (id) => {
  return new Promise((resolve, reject) => {
    database('integrante')
      .where('id', '=', id)
      .update({ ativo: false })
      .then(
        (result) => {
          resolve(result ?? false);
        },
        (error) => {
          console.error(
            'Erro ao ao tentar excluir/desativar integrante =>',
            error
          );
          reject('Erro ao tentar excluir/desativar integrante:', error);
        }
      );
  });
};

export default { obter, listar, criar, alterar, excluir };
