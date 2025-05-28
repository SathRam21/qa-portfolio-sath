/// <reference types="cypress" />

describe('SauceDemo Login Test', () => {
  const baseUrl = 'https://www.saucedemo.com';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should log in successfully with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Assertion: should land on the inventory page
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain.text', 'Products');
  });

  it('should show error on invalid login', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match');
  });
});
