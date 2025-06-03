// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-axe';

import 'cypress-axe';

Cypress.Commands.add('logA11yViolations', (violations) => {
  cy.task('log', `🔍 Found ${violations.length} accessibility violation(s):`);

  violations.forEach(({ id, impact, description, helpUrl, nodes }) => {
    cy.task('log', `\n❌ [${impact.toUpperCase()}] ${id}`);
    cy.task('log', `   - ${description}`);
    cy.task('log', `   - More info: ${helpUrl}`);
    cy.task('log', `   - Affected elements:`);

    nodes.forEach((node) => {
      cy.task('log', `     • Selector: ${node.target.join(', ')}`);
    });
  });
});

Cypress.Commands.add('saveA11yViolationsToSheet', (violations, pageName) => {
  if (violations.length) {
    cy.task('writeA11ySheet', { pageName, violations });
  }
});


