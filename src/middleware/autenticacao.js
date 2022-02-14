/**
 * Mockar método apenas para simular uma atenticação.
 * @TODO obter o token através da requisição e validar token, autorizando ou não
 * A função apenas retorna se token é válido ou não
 */

  const validarAutorizacaoAcesso = (req, res, next)=>{
    const token  =  req.headers.authorization
    if(!token) res.status(401).send({erro:"Token não informado, obtenha a autorização de acesso!"})
    else{
      const user =  autenticacaoServices.validarToken(token)
      if(!user) res.status(401).send({erro:"Token expirado ou inválido, obtenha a autorização de acesso!"})
      else{
        req.user = user
        next()
      }
    }
   
  }
  if (token) return true;
};

export default validarAutorizacaoAcesso;
