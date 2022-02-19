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
      .from('servico')
      .then(
        (result) => {
          resolve(result.map((item) => prepararModelo(item)));
        },
        (error) => {
          console.error('Erro ao listar os serviços', error);
          reject('Erro ao tentar os serviços:', error);
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
      .from('servico')
      .where('id', id)
      .then(
        (result) => {
          resolve(result[0] ? prepararModelo(result[0]) : false);
        },
        (error) => {
          console.error('Erro ao listar os serviços', error);
          reject('Erro ao tentar os serviços:', error);
        }
      );
  });
};

const alterar = (servico) => {
  delete servico.data;
  servico.modificado = new Date();
  return new Promise((resolve, reject) => {
    database('servico')
      .where('id', '=', servico.id)
      .update(servico)
      .then(
        (result) => {
          result
            ? resolve(obter(servico.id))
            : reject(`Não existe serviço com id: ${servico.id}`);
        },
        (error) => {
          console.error('Erro ao atualizar o serviço =>', error);
          reject('Erro ao tentar atualizar o serviço:', error);
        }
      );
  });
};

const criar = (servico) => {
  return new Promise((resolve, reject) => {
    database('servico')
      .insert(servico)
      .then(
        ([id]) => {
          servico.id = id;
          resolve(prepararModelo(servico));
        },
        (error) => {
          console.error('Erro tentar criar o servico =>', error);
          reject('Erro ao tentar criar novo o servico:', error);
        }
      );
  });
};

const excluir = (id) => {
  return new Promise((resolve, reject) => {
    database('servico')
      .where('id', '=', id)
      .update({ status: false })
      .then(
        (result) => {
          result
            ? resolve(result)
            : reject(
                `Não foi localizado o serviço com id: ${id} para excluir!`
              );
        },
        (error) => {
          console.error(
            'Erro ao ao tentar excluir/desativar o servico =>',
            error
          );
          reject('Erro ao tentar excluir/desativar o servico:', error);
        }
      );
  });
};

export default { obter, listar, criar, alterar, excluir };
