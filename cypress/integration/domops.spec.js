describe('UI TESTS', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('should clear the input text field', () => {
    cy.get('.action-email').type('fake@email.com');
    cy.get('.action-email').clear();
    cy.get('.action-email').should('have.value', '');
  });

  it('should double click the element', () => {
    cy.get('.action-div')
      .dblclick()
      .should('not.be.visible')
      .should('have.value', '');
  });
});
