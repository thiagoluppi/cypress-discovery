
// describe('Cadastro', function(){
//   it('Seja um entregador', function(){

//   })
// })
// Nesse exemplo comentado acima é como fazemos funções no JS, porém iremos usar o arrow function mais um vez, como demonstrado abaixo

describe('Cadastro', () => {
  it('Usuário deve ser tornar um entregador', () => {
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
  })
})