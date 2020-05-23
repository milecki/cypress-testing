describe('UI TESTS', () => {
  it('should load the login page correctly', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="login-text"]').should('have.length', 1);
    cy.get('[data-cy="login-text"]').should('be.visible');
  });

  it('should not login when username is not provided', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=password]').type('123456');
    cy.get('[data-cy=submit-button]').click();
    // check that we are still on the same page
    cy.get('[data-cy="login-text"]').should('have.length', 1);
    cy.get('[data-cy="homepage"]').should('have.length', 0);
  });

  it('should not login when password is not provided', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=email]').type('john@example.com');
    cy.get('[data-cy=submit-button]').click();
    cy.get('[data-cy="login-text"]').should('have.length', 1);
    cy.get('[data-cy="homepage"]').should('have.length', 0);
  });

  it('should login with valid username and password', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=email]').type('john@example.com');
    cy.get('[data-cy=password]').type('123456');
    cy.get('[data-cy=submit-button]').click();
    cy.get('[data-cy=logout-btn]').should('be.visible');
    cy.get('[data-cy=logout-btn]').should(
      'have.class',
      'btn-outline-secondary'
    );
    cy.get('[data-cy=logout-btn]').should('not.have.class', 'asdf');
  });

  it('should contain correct input field values', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=email]').type('smith@hotmail.com');
    cy.get('[data-cy=email]').should('have.value', 'smith@hotmail.com');
    cy.get('[data-cy=password]').type('123456');
    cy.get('[data-cy=password]').should('have.value', '123456');
    cy.get('[data-cy=password]').should('not.have.value', '!@#$%^');
  });
});
