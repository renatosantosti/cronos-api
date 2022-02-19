/**
 * Expoê métodos responsáveis por preparar o domínio para camada inferiores (ex. banco de dados)
 * ou para camadas superios (ex. serviços ou business logic.)
 */

class Integrante {
  constructor() {
    this.id = 0;
    this.nome = '';
    this.foto = '';
    this.email = '';
    this.isAdministrador = false;
    this.senha;
    this.status = false;
  }

  /**
   * @description monta e retorna um objeto POCO representando um integrante
   * @param {id, nome, foto, email, isAdministrador, senha, status} params
   */
  static montar = (params = {}) => {
    const { id, nome, foto, email, isAdministrador, senha, status } = params;
    if (!nome) {
      throw new Error('O nome não foi informado');
    }
    if (status === undefined || status === '') {
      throw new Error('O status não foi informado');
    }

    const integrante = new Integrante();
    integrante.id = id;
    integrante.nome = nome;
    integrante.foto = foto;
    integrante.email = email;
    integrante.isAdministrador = isAdministrador;
    integrante.senha = senha;
    integrante.status = status;
    return integrante;
  };
}

export default Integrante;
