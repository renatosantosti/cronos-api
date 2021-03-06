/**
 * Mockar função apenas para simular uma atenticação.
 * @TODO obter o token através da requisição e validar token, autorizando ou não
 * A função apenas retorna se token é válido ou não
 */

const validarAutorizacaoAcesso = (req, res, next) => {
  // const token = req.headers.authorization;
  const token = '....'; // @TODO obter token da requisição
  if (!token)
    res
      .status(401)
      .send({ erro: 'Token não informado, obtenha a autorização de acesso!' });
  else {
    // @TODO buscar usuário com base no token
    const user = { nome: 'João', isAdmin: true };
    if (!user)
      res.status(401).send({
        erro: 'Token expirado ou inválido, obtenha a autorização de acesso!'
      });
    else {
      req.user = user;
      return next();
    }
  }
};

export default validarAutorizacaoAcesso;
