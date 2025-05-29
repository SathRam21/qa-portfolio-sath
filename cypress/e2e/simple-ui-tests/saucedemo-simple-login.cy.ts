/// <reference types="cypress" />

describe('SauceDemo Login Test', () => {
  const baseUrl = 'https://www.saucedemo.com';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.log('🔄 Visiting SauceDemo login page');
  });

  it('should show error on invalid login', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();
    cy.log('🚫 Attempted login with invalid credentials');

    cy.get('[data-test="error"]').should('be.visible');
    cy.log('✅ Error message is visible');

    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match');
    cy.log('✅ Error message content is correct');
  });

  it('should log in successfully with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.log('🔓 Logged in with valid credentials');

    cy.url().should('include', '/inventory.html');
    cy.log('✅ URL redirected to inventory page');

    cy.get('.title').should('contain.text', 'Products');
    cy.log('✅ Inventory page title verified');
  });
});
