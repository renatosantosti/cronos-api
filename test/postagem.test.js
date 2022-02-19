import Postagem from '../src/domain/postagem';

describe('DomainPostagem', () => {
  it('Nós podemos verificar se um Domain/Postagem é criado pelo domínio', () => {
    let user = new Postagem();
    expect(user).toBeDefined();
  });
});
