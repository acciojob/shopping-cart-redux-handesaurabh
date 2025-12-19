describe('Shopping cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080'); // Updated to match the default webpack dev server port
  });

  it('Checking if app renders successfully', () => {
    // Updated selector to match the actual structure
    cy.contains('h3', 'All Products').should('be.visible');
  });

  it('should add a product to the cart', () => {
    // Click the first 'Add to Cart' button
    cy.get('.custom-card').first().within(() => {
      cy.contains('button', 'Add to Cart').click({ multiple: true });
    });
    
    // Check if item was added to cart
    cy.contains('button', 'Cart').click();
    cy.get('.cart-item').should('have.length', 1);
  });

  it('should remove a product from the cart', () => {
    // Add item to cart first
    cy.get('.custom-card').first().within(() => {
      cy.contains('button', 'Add to Cart').click({ multiple: true });
    });
    
    // Go to cart and remove item
    cy.contains('button', 'Cart').click();
    cy.get('.cart-item').should('have.length', 1);
    
    cy.get('.cart-item').first().within(() => {
      cy.contains('button', 'Remove').click({ multiple: true });
    });
    
    cy.get('.cart-item').should('have.length', 0);
    cy.contains('Your cart is empty').should('be.visible');
  });

  it('should increase the quantity of a product in the cart', () => {
    // Add item to cart first
    cy.get('.custom-card').first().within(() => {
      cy.contains('button', 'Add to Cart').click({ multiple: true });
    });
    
    // Go to cart and increase quantity
    cy.contains('button', 'Cart').click();
    cy.get('.cart-item').should('have.length', 1);
    
    cy.get('.cart-item').first().within(() => {
      cy.contains('button', '+').click({ multiple: true });
    });
    
    cy.get('.cart-item .mx-2').should('contain', '2');
  });

  it('should decrease the quantity of a product in the cart', () => {
    // Add item to cart first
    cy.get('.custom-card').first().within(() => {
      cy.contains('button', 'Add to Cart').click({ multiple: true });
    });
    
    // Go to cart and increase quantity first, then decrease
    cy.contains('button', 'Cart').click();
    cy.get('.cart-item').should('have.length', 1);
    
    // Increase to 2
    cy.get('.cart-item').first().within(() => {
      cy.contains('button', '+').click({ multiple: true });
    });
    
    cy.get('.cart-item .mx-2').should('contain', '2');
    
    // Decrease to 1
    cy.get('.cart-item').first().within(() => {
      cy.contains('button', '-').click({ multiple: true });
    });
    
    cy.get('.cart-item .mx-2').should('contain', '1');
  });

  it('should add a product to the wishlist', () => {
    // Click the wishlist button on the first card
    cy.get('.custom-card').first().within(() => {
      cy.contains('button', 'Add to Wishlist').click({ multiple: true });
    });
    
    // Check if item was added to wishlist
    cy.contains('button', 'Wishlist').click();
    cy.get('.col-md-6.mb-4').should('have.length', 1); // Using the actual class from Wishlist component
  });

  it('should remove a product from the wishlist', () => {
    // Add item to wishlist first
    cy.get('.custom-card').first().within(() => {
      cy.contains('button', 'Add to Wishlist').click({ multiple: true });
    });
    
    // Go to wishlist and remove item
    cy.contains('button', 'Wishlist').click();
    cy.get('.col-md-6.mb-4').should('have.length', 1); // Using the actual class from Wishlist component
    
    cy.get('.col-md-6.mb-4').first().within(() => {
      cy.contains('button', 'Remove').click({ multiple: true });
    });
    
    cy.get('.col-md-6.mb-4').should('have.length', 0);
    cy.contains('Your wishlist is empty').should('be.visible');
  });
});