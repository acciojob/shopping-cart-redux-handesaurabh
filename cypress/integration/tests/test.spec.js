describe('Shopping cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('Checking if app renders successfully', () => {
    cy.get('#root', { timeout: 10000 }).should('be.visible');
    cy.contains('Shopping Cart').should('be.visible');
    cy.contains('All Products').should('be.visible');
  });

  it('should add a product to the cart', () => {
    cy.contains('Add to Cart').first().click();
    cy.contains('Cart').click();
    cy.contains('Shopping Cart').should('be.visible');
    cy.get('.cart-item').should('have.length.greaterThan', 0);
  });

  it('should remove a product from the cart', () => {
    cy.contains('Add to Cart').first().click();
    cy.contains('Cart').click();
    cy.contains('Remove').first().click();
    cy.contains('Your cart is empty').should('be.visible');
  });

  it('should increase the quantity of a product in the cart', () => {
    cy.contains('Add to Cart').first().click();
    cy.contains('Cart').click();
    cy.contains('+').first().click();
    cy.get('.cart-item .quantity-controls span').first().should('contain', '2');
  });

  it('should decrease the quantity of a product in the cart', () => {
    cy.contains('Add to Cart').first().click();
    cy.contains('Cart').click();
    cy.contains('+').first().click();
    cy.contains('-').first().click();
    cy.get('.cart-item .quantity-controls span').first().should('contain', '1');
  });

  it('should add a product to the wishlist', () => {
    cy.contains('Add to Wishlist').first().click();
    cy.contains('Wishlist').click();
    cy.get('.wishlist-items .col-md-6').should('have.length.greaterThan', 0);
  });

  it('should remove a product from the wishlist', () => {
    cy.contains('Add to Wishlist').first().click();
    cy.contains('Wishlist').click();
    cy.contains('Remove').first().click();
    cy.contains('Your wishlist is empty').should('be.visible');
  });
});
