Cypress.Commands.add('fillRegisterForm', () => {
  cy.getBySelector('register-email-input').type('siwiec.michal724@gmail.com');
  cy.getBySelector('register-password-input').type('A678gshj2Zv');
  cy.getBySelector('register-submit-btn').click();
});
