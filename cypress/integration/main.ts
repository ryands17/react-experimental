it('checks if the home page works', () => {
  cy.visit('http://localhost:5000/')
  cy.contains('Home Page', { matchCase: false })
})
