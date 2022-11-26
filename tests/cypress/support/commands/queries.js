Cypress.Commands.add('getBySelector', (selector) => cy.get(`[data-cy=${selector}]`));
Cypress.Commands.add('getWithContaining', (selector) => cy.get(`[data-cy*=${selector}]`));
