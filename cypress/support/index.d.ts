//Este arquivo possibilita que os custom commands apareçam no auto-complete
declare namespace Cypress {
    interface Chainable {
  
      /**
       * @example cy.login()
       */
      login(): void
  
      /**
       * @example cy.token()
       */
  
      token(): void
  
    }
  }