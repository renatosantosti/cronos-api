import database from '../config/database';

const prepararModelo = (dado) => {
  return dado;
};

/**
 * @description: realiza pesquisa no banco de dados e retorna os serviços cadastrados
 * @returns arrays de serviços
 */
const listar = () => {
  return new Promise((resolve, reject) => {
    database
      .select()
      .from('postagem')
      .then(
        (result) => {
          resolve(result.map((item) => prepararModelo(item)));
        },
        (error) => {
          console.error('Erro ao listar as postagens', error);
          reject('Erro ao tentar as postagens:', error);
        }
      );
  });
};

/**
 * @description: realiza pesquisa no banco de dados e retorna os serviços cadastrados
 * @returns arrays de serviços
 */
const obter = (id) => {
  return new Promise((resolve, reject) => {
    database
      .select()
      .from('postagem')
      .where('id', id)
      .then(
        (result) => {
          resolve(result[0] ? prepararModelo(result[0]) : false);
        },
        (error) => {
          console.error('Erro ao listar as postagens', error);
          reject('Erro ao tentar as postagens:', error);
        }
      );
  });
};

const alterar = (postagem) => {
  delete postagem.data;
  postagem.modificado = new Date();
  return new Promise((resolve, reject) => {
    database('postagem')
      .where('id', '=', postagem.id)
      .update(postagem)
      .then(
        (result) => {
          result
            ? resolve(obter(postagem.id))
            : reject(`Não existe postagem com id: ${postagem.id}`);
        },
        (error) => {
          console.error('Erro ao atualizar a postagem =>', error);
          reject('Erro ao tentar atualizar a postagem:', error);
        }
      );
  });
};

const criar = (postagem) => {
  return new Promise((resolve, reject) => {
    database('postagem')
      .insert(postagem)
      .then(
        ([id]) => {
          postagem.id = id;
          resolve(prepararModelo(postagem));
        },
        (error) => {
          console.error('Erro tentar criar a postagem =>', error);
          reject('Erro ao tentar criar nova a postagem:', error);
        }
      );
  });
};

const excluir = (id) => {
  return new Promise((resolve, reject) => {
    database('postagem')
      .where('id', '=', id)
      .update({ status: false })
      .then(
        (result) => {
          result
            ? resolve(result)
            : reject(
                `Não foi localizada a postagem com id: ${id} para excluir!`
              );
        },
        (error) => {
          console.error(
            'Erro ao ao tentar excluir/desativar a postagem =>',
            error
          );
          reject('Erro ao tentar excluir/desativar a postagem:', error);
        }
      );
  });
};

export default { obter, listar, criar, alterar, excluir };
