describe('@purple-dot/purple-dot-js', () => {
  beforeEach(() => {
    Cypress.on('window:before:load', (win) => {
      cy.spy(win.console, 'error');
      cy.spy(win.console, 'warn');
    });

    cy.visit('http://localhost:8080/');
  });

  it('Loads the Purple Dot SDK without warnings or errors', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'PurpleDot');

    cy.window().then((win) => {
      expect(win.console.error).to.have.callCount(0);
      expect(win.console.warn).to.have.callCount(0);
    });
  });
});
