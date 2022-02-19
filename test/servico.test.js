import Servico from '../src/domain/servico';

describe('DomainServico', () => {
  it('Nós podemos verificar se um Domain/Servico é criado pelo domínio', () => {
    let user = new Servico();
    expect(user).toBeDefined();
  });
});
