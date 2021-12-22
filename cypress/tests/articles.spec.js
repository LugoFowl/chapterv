/// <reference types = "cypress" />

import articles from '../support/pages/articles/index'
describe('Articles', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Cadastro de novo artigo com sucesso', () => {
    articles.acessarFormulario()
    articles.preencherFormulario()
    articles.submeterFormulario()
    articles.verificarSeArtigoFoiCriado()
  })
})
