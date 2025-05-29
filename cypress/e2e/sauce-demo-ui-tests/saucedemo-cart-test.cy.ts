/// <reference types="cypress" />

describe('SauceDemo – Add & Remove Multiple Items from Cart', () => {
  const baseUrl = 'https://www.saucedemo.com';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.log('✅ Logged in successfully');
  });

  it('should add multiple items to cart and validate cart count', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.log('🛒 Added 3 items to cart');

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3');
    cy.log('✅ Cart badge shows 3 items');

    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    cy.get('.cart_item').should('have.length', 3);
    cy.log('✅ Cart page shows 3 items');
  });

  it('should remove items from cart and update count correctly', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.log('🛒 Added 3 items again');

    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    cy.log('🗑 Removed 2 items from cart');

    cy.get('.cart_item').should('have.length', 1);
    cy.log('✅ Cart page shows 1 remaining item');

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    cy.log('✅ Cart badge updated to 1');
  });

  it('should verify specific items are shown in the cart', () => {
    // Add 2 known items
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.log('🛒 Added Backpack and Bike Light to cart');

    // Go to cart
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    // Assert both item names are in the cart
    cy.get('.cart_item').should('have.length', 2);
    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Bike Light');
    cy.log('✅ Cart shows correct item names');
  });
});
