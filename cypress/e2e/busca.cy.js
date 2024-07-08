/// <reference types="cypress" />

describe('US-001-Funcionalidade: Busca de Filmes', () => {
    beforeEach(() =>{
      cy.visit('/')
    })

    it('Deve buscar filmes com sucesso', () => {
        cy.get('#search-input').type('The Matrix')
        cy.get('#search-button').click()
        cy.get(':nth-child(1) > h3').should('contain', 'The Matrix')
    })

    it('Limpar Busca de filmes', () => {
        cy.get('#clear-button').click()
        cy.get('#search-input').should('contain', '')
    })
    
    it('Busca de filmes com palavra-chave inválida', () => {
        cy.get('#search-input').type('Semana EBAC QA')
        cy.get('#search-button').click()
        cy.get('#results-section > p').should('contain', 'Filme não encontrado')
    })

    it('Deve buscar filmes de uma lista', () =>{
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[2].titulo)
            cy.get('#search-button').click()
            cy.get(':nth-child(1) > h3').should('contain', filmes[2].titulo)
        })
    })

    it('Deve buscar filmes da lista inteira', () =>{
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get(':nth-child(1) > h3').should('contain', filmes.titulo)
        })
    })

})