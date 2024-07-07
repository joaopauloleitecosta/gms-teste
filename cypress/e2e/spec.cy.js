/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Maria')
    cy.get('#signup-lastname').type('Costa')
    cy.get('#signup-email').type('maria@teste.com')
    cy.get('#signup-phone').type('84991657802')
    cy.get('#signup-password').type('Maria@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})