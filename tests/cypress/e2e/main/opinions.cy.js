import { mockResponse, delayAndMock } from '../../support/utils/graphql.js';
import { APPEARING_ELEMENT_TIME } from '../../support/constants.js';

/// <reference types="cypress" />

describe('opinions', () => {
  describe('opinions list', () => {
    describe('presence', () => {
      context('when no opinion added', () => {
        beforeEach(() => {
          cy.intercept('POST', '/graphql', (request) => {
            mockResponse({ request, operationName: 'OpinionsDetails', fixturePath: 'opinions/emptyOpinionsList.json' });
          });

          cy.visit('/opinions');
        });

        it('shows no opinion info', () => {
          cy.contains('Niestety nie posiadamy jeszcze żadnych opini');
        });
      });

      context('when opinions are present', () => {
        beforeEach(() => {
          cy.intercept('POST', '/graphql', (request) => {
            mockResponse({ request, operationName: 'OpinionsDetails', fixturePath: 'opinions/opinionList.json' });
          });

          cy.visit('/opinions');
        });

        it('shows two opinions on first page', () => {
          cy.getWithContaining('opinion-').should('have.length', 2);
        });

        it('shows two pagination tiles and selection arrow', () => {
          cy.get('.pagination__list-item').should('have.length', 3);
        });
      });
    });

    describe('opinion elements', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'OpinionsDetails', fixturePath: 'opinions/opinionList.json' });
          mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
        });

        cy.visit('/opinions');
        cy.wait(APPEARING_ELEMENT_TIME * 2);
      });

      it('shows opinion elements', () => {
        cy.getBySelector('opinion-0').within(() => {
          cy.contains('siwiec.michal724@gmail.com').should('exist');
          cy.contains('20.11.2022, 21:20:02').should('exist');
          cy.contains('"Wspanialy sklep, ale nie ..."').should('exist');
          cy.contains('Czytaj więcej').click();
          cy.contains('Schowaj').should('exist');
          cy.contains('"Wspanialy sklep, ale nie dziala logowanie!"');
          cy.contains('Schowaj').click();
          cy.contains('"Wspanialy sklep, ale nie dziala logowanie!"').should('not.exist');
          cy.contains('"Wspanialy sklep, ale nie ..."').should('exist');
        });

        cy.getBySelector('opinion-1').within(() => {
          cy.contains('siwiec.michal724@gmail.com');
          cy.contains('20.11.2022, 21:20:42');
          cy.contains('"Nothing"');
          cy.contains('Czytaj więcej').should('not.exist');
          cy.contains('Schowaj').should('not.exist');
        });
      });
    });
  });

  describe('form to add opinion', () => {
    describe('validation', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
        });

        cy.visit('/opinions');
      });

      it('validates form', () => {
        cy.getBySelector('add-opinion-submit-button').click();
        cy.contains('Opinia ma niepoprawny format!').should('exist');
        cy.getBySelector('add-opinion-text-area').type('Świetny sklep!').click();
        cy.getBySelector('add-opinion-submit-button').click();
        cy.contains('Opinia ma niepoprawny format!').should('not.exist');
      });
    });

    describe('modals', () => {
      context('success path', () => {
        beforeEach(() => {
          cy.intercept('POST', '/graphql', (request) => {
            mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
          });

          cy.intercept('POST', '/graphql', (request) => {
            return delayAndMock({
              request,
              operationName: 'addOpinion',
              fixturePath: 'opinions/addingOpinionSuccess.json',
              statusCode: 200
            });
          });
    
          cy.visit('/opinions');
        });

        // TODO add loading modal
        it.skip('shows loading and success modal after submit form', () => {
          cy.fillFormToAddOpinion();
          cy.checkPresenceOfLoadingAndSuccessModals({
            loadingModalInfo: 'Twoja opinia jest dodawana!',
            successModalInfo: 'Dziękujemy za dodanie opini!'
          });
        });
      });

      context('failure path', () => {
        beforeEach(() => {
          cy.intercept('POST', '/graphql', (request) => {
            mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
          });

          cy.intercept('POST', '/graphql', (request) => {
            return delayAndMock({
              request,
              operationName: 'addOpinion',
              fixturePath: 'opinions/addingOpinionFailure.json',
              statusCode: 500
            });
          });
  
          cy.visit('/opinions');
        });

        // TODO add loading modal
        it.skip('shows loading and error modal after submit form', () => {
          cy.fillFormToAddOpinion();
          cy.checkPresenceOfLoadingAndErrorModals({
            loadingModalInfo: 'Twoja opinia jest dodawana!',
            errorModalInfo: 'Niestety nie udało się dodać nowej opini.'
          });
        });
      });
    });

    describe('presence', () => {
      context('when user is logged', () => {
        beforeEach(() => {
          cy.intercept('POST', '/graphql', (request) => {
            mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
          });

          cy.visit('/opinions');
        });

        it('checks if form is visible', () => {
          cy.contains('Dodaj opinie').should('exist');
          cy.getBySelector('add-opinion-text-area').should('exist');
          cy.contains('Wyślij').should('exist');
        });
      });
  
      context('when user is not logged', () => {
        beforeEach(() => {
          cy.intercept('POST', '/graphql', (request) => {
            mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
          });

          cy.visit('/opinions');
        });

        it('checks if form is invisible', () => {
          cy.contains('Dodaj opinie').should('not.exist');
          cy.getBySelector('add-opinion-text-area').should('not.exist');
          cy.contains('Wyślij').should('not.exist');
        });
      });
    });
  });
});
