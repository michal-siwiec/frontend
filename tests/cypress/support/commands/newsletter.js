Cypress.Commands.add('fillNewsletterForm', () => {
  cy.getBySelector('newsletter-name').type('Michal');
  cy.getBySelector('newsletter-surname').type('Siwiec');
  cy.getBySelector('newsletter-email').type('siwiec.michal724@gmail.com');
  cy.getBySelector('newsletter-submit-button').click();
});
