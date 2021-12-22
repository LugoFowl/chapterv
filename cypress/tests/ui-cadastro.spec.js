/// <reference types="cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('ChapterChapterV')
    cy.get('[placeholder=Email]').type('chapterv@mail.com')
    cy.get('[placeholder=Password]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-usuario-existente'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('lugofowl')
    cy.get('[placeholder=Email]').type('lugofowl@gmail.com')
    cy.get('[placeholder=Password]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })
})
