/// <reference types="cypress" />

describe('Realizando testes no Golden Movie Studio', () => {
  beforeEach(() =>{
    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `joao${Date.now()}@teste.com`
    cy.preencherCadastro('João', 'Paulo', email, '84991567321', 'Joao@123456')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    var email = `joao${Date.now()}@teste.com`
    cy.preencherCadastro('João30', 'Paulo', email, '84991567321', 'Joao@123456')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  })
})