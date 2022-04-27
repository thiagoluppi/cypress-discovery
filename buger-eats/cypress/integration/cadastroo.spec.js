
// describe('Cadastro', function(){
//   it('Seja um entregador', function(){

//   })
// })
// Nesse exemplo comentado acima é como fazemos funções no JS, porém iremos usar o arrow function mais um vez, como demonstrado abaixo

describe('Cadastro', () => {
  it('Usuário deve se tornar um entregador', () => {
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')





    // vamos montar a massa de testes:
    // e para isso a variavel entregador é criada como um objeto javascript nativo:
    var entregador = {
      nome: 'Thiago Luppi',
      cpf: '00000014141',
      email: 'thiagoluppi@hotmail.com',
      whatsapp: '11999999999',
      endereco: {
        cep: '04534011',
        rua: 'Rua Joaquim Floriano',
        numero: '1000',
        complemento: 'Ap 142',
        bairro: 'Itaim Bibi',
        cidade_uf: 'São Paulo/SP'
      },
      metodo_entrega: 'Moto'
    }

    cy.get('input[name="name"]').type(entregador.nome)
    cy.get('input[name="cpf"]').type(entregador.cpf)
    cy.get('input[name="email"]').type(entregador.email)
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

    cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
    cy.get('input[type=button][value="Buscar CEP"]').click()

    cy.get('input[name="address-number"]').type(entregador.endereco.numero)
    cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

    cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
    cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
    cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

    // o método contains pode juntar um seletor css com o texto
    cy.contains('.delivery-method li', entregador.metodo_entrega).click()
  })
})