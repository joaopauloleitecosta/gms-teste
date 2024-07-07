/// <reference types="cypress" />

describe('Realizando testes no Golden Movie Studio', () => {
  it('Busca de filmes com palavra-chave válida', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('The Matrix')
    cy.get('#search-button').click()
    cy.get(':nth-child(1) > h3').should('contain', 'The Matrix')
  })

  it('Limpar Busca de filmes', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#clear-button').click()
    cy.get('#search-input').should('contain', '')
  })

  it('Busca de filmes com palavra-chave inválida', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('Semana EBAC QA')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('contain', 'Filme não encontrado')
  })

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Maria')
    cy.get('#signup-lastname').type('Costa')
    cy.get('#signup-email').type('maria@teste.com')
    cy.get('#signup-phone').type('84881657802')
    cy.get('#signup-password').type('Maria@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})