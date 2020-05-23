describe('UI TESTS', () => {
  it('should load the login page correctly', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="login-text"]').should('have.length', 1);
    cy.get('[data-cy="login-text"]').should('be.visible');
  });

  it('should should not login when username is not provided', () => {
    cy.visit('http://localhost:3000');
    cy.get('#inputPassword').type('123456');
    cy.get('[data-cy=submit-button]').click();
    // check that we are still on the same page
    cy.get('[data-cy="login-text"]').should('have.length', 1);
    cy.get('[data-cy="homepage"]').should('have.length', 0);
  });
});
