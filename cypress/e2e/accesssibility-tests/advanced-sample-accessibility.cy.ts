/// <reference types="cypress" />

describe('Accessibility Test – Detailed Logging and EXPORT Excel sheet', () => {
  it('logs detailed accessibility violations with links and selectors and automatically exports a sheet', () => {

    const pageName = 'LoginPage';

    cy.visit('https://www.saucedemo.com');
    cy.injectAxe();

    cy.checkA11y(null, {}, (violations) => {
    cy.saveA11yViolationsToSheet(violations, pageName);
    });

    });
});
