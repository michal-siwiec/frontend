Cypress.Commands.add('checkURL', (suffix = '') => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/${suffix}`);
});
