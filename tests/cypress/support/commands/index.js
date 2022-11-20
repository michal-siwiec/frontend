import './modals.js';
import './newsletter.js';

Cypress.Commands.add('getBySelector', (selector) => cy.get(`[data-cy=${selector}]`));
