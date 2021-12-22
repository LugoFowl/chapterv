const el = require('./elements').ELEMENTS

const articleName = 'Article Name + ' + new Date().getTime()

class Articles {
  acessarFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Descrição artigo testes')
    cy.get(el.inputBody).type('corpo do texto do artigo')
    cy.get(el.inputTags).type('cypress')
  }

  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarSeArtigoFoiCriado () {
    cy.get('h1').should('have.text', articleName)
  }
}
export default new Articles()
