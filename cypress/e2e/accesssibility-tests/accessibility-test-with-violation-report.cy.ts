/// <reference types="cypress" />

describe('🧪 SauceDemo Accessibility Checks', () => {
  const baseUrl = 'https://www.saucedemo.com';

  it('runs accessibility check on Login Page', () => {
    cy.visit(baseUrl);
    cy.injectAxe();

    cy.checkA11y(null, {}, (violations) => {
      cy.saveA11yViolationsToSheet(violations, 'LoginPage');
    });
  });

  it('logs in and runs accessibility check on Inventory Page', () => {
    cy.visit(baseUrl);
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.injectAxe();

    cy.checkA11y(null, {}, (violations) => {
      cy.saveA11yViolationsToSheet(violations, 'InventoryPage');
    });
  });
});
