Cypress.Commands.add('fillLoginForm', () => {
  cy.getBySelector('login-email-input').type('siwiec.michal724@gmail.com');
  cy.getBySelector('login-password-input').type('Jk765df22zcs2');
  cy.getBySelector('login-submit-btn').click();
});
