Cypress.Commands.add('getBySelector', (selector) => cy.get(`[data-cy=${selector}]`));
