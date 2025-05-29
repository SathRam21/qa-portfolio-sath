/// <reference types="cypress" />

describe('SauceDemo – Add to Cart and Checkout Workflow', () => {
  const baseUrl = 'https://www.saucedemo.com';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should complete purchase and validate cart and pricing details for 1 item', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.log('✅ Added "Sauce Labs Backpack" to cart');

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    cy.log('✅ Cart badge shows 1 item');

    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 1);
    cy.log('✅ Cart contains 1 item');

    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');

    cy.get('[data-test="firstName"]').type('Sath');
    cy.get('[data-test="lastName"]').type('Ramanan');
    cy.get('[data-test="postalCode"]').type('M1K2N1');
    cy.get('[data-test="continue"]').click();

    cy.get('.summary_subtotal_label').should('contain.text', 'Item total: $29.99');
    cy.log('✅ Item total matches expected value');

    cy.get('.summary_tax_label').should('contain.text', 'Tax: $2.40');
    cy.log('✅ Tax amount is correct');

    cy.get('.summary_total_label').should('contain.text', 'Total: $32.39');
    cy.log('✅ Total price is accurate');

    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    cy.log('✅ Checkout completed successfully');
  });

  it('should purchase multiple items and validate combined totals', () => {
    // Add multiple items
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // $29.99
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); // $9.99
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click(); // $15.99
    cy.log('✅ Added 3 items to cart');

    // Expected item total: 29.99 + 9.99 + 15.99 = 55.97
    const expectedSubtotal = '$55.97';
    const expectedTax = '$4.48'; // SauceDemo uses ~8% tax rate
    const expectedTotal = '$60.45';

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3');
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 3);
    cy.log('✅ Cart contains 3 items');

    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Sath');
    cy.get('[data-test="lastName"]').type('Ramanan');
    cy.get('[data-test="postalCode"]').type('M1K2N1');
    cy.get('[data-test="continue"]').click();

    // Assert item total, tax, and full total
    cy.get('.summary_subtotal_label').should('contain.text', `Item total: ${expectedSubtotal}`);
    cy.log(`✅ Subtotal matches: ${expectedSubtotal}`);

    cy.get('.summary_tax_label').should('contain.text', `Tax: ${expectedTax}`);
    cy.log(`✅ Tax matches: ${expectedTax}`);

    cy.get('.summary_total_label').should('contain.text', `Total: ${expectedTotal}`);
    cy.log(`✅ Final total matches: ${expectedTotal}`);

    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    cy.log('✅ Checkout completed for multiple items');
  });
});
