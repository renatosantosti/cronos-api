import Integrante from '../src/domain/integrante';

describe('DomainIntegrante', () => {
  it('Nós podemos verificar se um Domain/Integrante é criado pelo domínio', () => {
    let user = new Integrante();
    expect(user).toBeDefined();
  });
});
