/// <reference types="cypress" />

describe('Accessibility Test – Detailed Logging', () => {
  it('logs detailed accessibility violations with links and selectors', () => {
    cy.visit('https://www.saucedemo.com'); // or your custom page

    cy.injectAxe();
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious', 'moderate'],
    }, (violations) => {
      cy.logA11yViolations(violations);
    });
  });
});
