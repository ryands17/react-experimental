it('checks if the home page works', () => {
  cy.visit(Cypress.env('HOST'))
  cy.contains('Home Page', { matchCase: false })
})
