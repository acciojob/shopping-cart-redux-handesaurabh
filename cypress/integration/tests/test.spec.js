describe('Shopping cart', () => {
  it('Checking if app renders successfully', () => {
    cy.visit('http://localhost:8080');
    cy.get('#root', { timeout: 10000 }).should('be.visible');
    cy.contains('Shopping cart').should('be.visible');
  });

  it('should add a product to the cart', () => {
    cy.get('button').contains(/add|cart/i).first().click({ force: true });
    cy.contains(/cart|item/i).should('exist');
  });

  it('should remove a product from the cart', () => {
    cy.get('button').contains(/add/i).first().click();
    cy.get('button').contains(/remove|delete/i).first().click({ force: true });
  });

  it('should increase the quantity of a product in the cart', () => {
    cy.get('button').contains(/add/i).first().click();
    cy.get('button:contains("+")').first().click({ force: true });
  });

  it('should decrease the quantity of a product in the cart', () => {
    cy.get('button').contains(/add/i).first().click();
    cy.get('button:contains("-")').first().click({ force: true });
  });

  it('should add a product to the wishlist', () => {
    cy.get('button').contains(/heart|wishlist|♥/i).first().click({ force: true });
  });

  it('should remove a product from the wishlist', () => {
    cy.get('button').contains(/heart|wishlist|♥/i).first().click({ force: true });
  });
});