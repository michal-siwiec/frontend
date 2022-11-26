Cypress.Commands.add('fillFormToAddOpinion', () => {
  cy.getBySelector('add-opinion-text-area').type('My test opinion');
  cy.getBySelector('add-opinion-submit-button').click();
});
