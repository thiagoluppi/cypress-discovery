
// describe é a nossa suite de teste
// '()=>' é uma arrow function
describe('home page', ()=>{
  it('app deve estar online', ()=>{
    // cy. é o comando do cypress para acessar a API do cypress e ter acesso aos recursos do framework:
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app')

    // utilizando da ferramenta "Open selector playground" lá na tela de execução do cypress no chrome, pegamos o elemento h1 para validar
    // clicamos no elemento e o cypress já mostrou o código para pegar esse elemento "cy.get('h1')"
    // usamos o método .should e invocamos o have.text e passamos o texto que queremos validar:
    // o should é um assert, ou seja, é como se fosse o expect.
    cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    // para aumentar a assertividade na hora de buscar o elemento, não iremos mais buscar apenas pelo elemento h1 na tela, porque não é indidcado
    // pois, se houver mais de um elemento h1 na tela, não conseguiremos pegá-lo.
    // fazendo dessa forma "cy.get('#page-home main h1')" fica mais preciso.
  })
})