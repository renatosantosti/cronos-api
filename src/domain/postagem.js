/**
 * Expoê métodos responsáveis por preparar o domínio para camada inferiores (ex. banco de dados)
 * ou para camadas superios (ex. serviços ou business logic.)
 */

class Postagem {
  constructor() {
    this.id = 0;
    this.titulo = '';
    this.data = new Date();
    this.modificado = '';
    this.conteudo = '';
    this.integrante;
    this.status = false;
  }

  /**
   * @description monta e retorna um objeto POCO representando uma postagem
   * @param {id, titulo, data, modificado, conteudo, integrante, status} params
   */
  static montar = (params = {}) => {
    const { id, titulo, data, modificado, conteudo, integrante, status } =
      params;
    if (!titulo) {
      throw new Error('O título não foi informado');
    }

    if (!conteudo) {
      throw new Error('O título não foi informado');
    }

    if (status === undefined || status === '') {
      throw new Error('O status não foi informado');
    }

    const postagem = new Postagem();
    postagem.id = id;
    postagem.titulo = titulo;
    postagem.data = data;
    postagem.modificado = modificado;
    postagem.conteudo = conteudo;
    postagem.integrante = integrante;
    postagem.status = status;
    return postagem;
  };
}

export default Postagem;
