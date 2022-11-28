import { DEFAULT_REQUEST_DELAY } from '../constants.js';

Cypress.Commands.add('checkPresenceOfLoadingAndSuccessModals', ({ loadingModalInfo, successModalInfo }) => {
  cy.checkLoadingModalPresence(loadingModalInfo);
  cy.checkSuccessModalPresence(successModalInfo);
});

Cypress.Commands.add('checkPresenceOfLoadingAndErrorModals', ({ loadingModalInfo, errorModalInfo }) => {
  cy.checkLoadingModalPresence(loadingModalInfo);
  cy.checkErrorModalPresence(errorModalInfo);
});

Cypress.Commands.add('checkLoadingModalPresence', (actionInfo) => {
  cy.contains('Prosimy o chwilę cierpliwości').should('exist');
  cy.contains(actionInfo).should('exist');
  cy.wait(DEFAULT_REQUEST_DELAY);
});

Cypress.Commands.add('checkSuccessModalPresence', (actionInfo) => {
  cy.contains('Dziękujemy!').should('exist');
  cy.contains(actionInfo).should('exist');
});

Cypress.Commands.add('checkErrorModalPresence', (actionInfo) => {
  cy.contains('Wystąpił niespodziewany problem!').should('exist');
  cy.contains(actionInfo).should('exist');
});