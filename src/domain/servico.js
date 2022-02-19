/**
 * Expoê métodos responsáveis por preparar o domínio para camada inferiores (ex. banco de dados)
 * ou para camadas superios (ex. serviços ou business logic.)
 */

class Servico {
  constructor() {
    this.id = 0;
    this.nome = '';
    this.descricao = '';
    this.status = false;
  }

  /**
   * @description monta e retorna um objeto POCO representando um serviço
   * @param {id, nome, descricao, status} params
   */
  static montar = (params = {}) => {
    const { id, nome, descricao, status} = params;
    if (!nome) {
      throw new Error('O nome não foi informado');
    }
    if (status === undefined || status === '') {
      throw new Error('O status não foi informado');
    }

    const servico =  new Servico()
    servico.id =  id
    servico.nome =  nome
    servico.descricao =  descricao
    servico.status =  status

    return servico;
  };
}

export default Servico;
