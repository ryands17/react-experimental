it('checks if the home page works', () => {
  cy.visit('http://localhost:8080/')
  cy.contains('Home Page', { matchCase: false })
})
