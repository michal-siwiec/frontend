/// <reference types="cypress" />

import { mockResponse, delayAndMock } from '../support/utils/graphql.js';

describe('newsletter', () => {
  describe('form presence', () => {
    context('when user is not logged', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
          mockResponse({ request, operationName: 'ProductsDetails', fixturePath: 'products/promoted.json' });
        });
  
        cy.visit('/');
      });
  
      it('checks if newsletter form is present', () => {
        cy.contains('Zapisz się na newsletter aby być na bieżąco!');
        cy.get('#newsletter-form').should('exist');
      });
    });

    context('when user is logged', () => {
      context('when user is already saved to newsletter', () => {
        beforeEach(() => {
          cy.intercept('POST', '/graphql', (request) => {
            mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
            mockResponse({ request, operationName: 'ProductsDetails', fixturePath: 'products/promoted.json' });
            mockResponse({
              request,
              operationName: 'IsUserSavedToNewsletter',
              fixturePath: 'savedToNewsletter/saved.json'
            });
          });
  
          cy.visit('/');
        });
  
        it('checks that form in not present', () => {
          cy.contains('Zapisz się na newsletter aby być na bieżąco!').should('not.exist');
          cy.get('#newsletter-form').should('not.exist');
        });
      });
  
      context('when user is not saved to newsletter', () => {
        beforeEach(() => {
          cy.intercept('POST', '/graphql', (request) => {
            mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
            mockResponse({ request, operationName: 'ProductsDetails', fixturePath: 'products/promoted.json' });
            mockResponse({
              request,
              operationName: 'IsUserSavedToNewsletter',
              fixturePath: 'savedToNewsletter/notSaved.json'
            });
          });
  
          cy.visit('/');
        });
  
        it('checks if newsletter form is present', () => {
          cy.contains('Zapisz się na newsletter aby być na bieżąco!');
          cy.get('#newsletter-form').should('exist');
        });
      });
    });
  });

  describe('validation', () => {
    it('validates form', () => {
      cy.visit('/');
  
      cy.getBySelector('newsletter-submit-button').click();
      cy.contains('Imię ma niepoprawny format!').should('exist');
      cy.contains('Nazwisko ma niepoprawny format!').should('exist');
      cy.contains('Email ma niepoprawny format!').should('exist');
  
      cy.getBySelector('newsletter-name').type('Michal');
      cy.getBySelector('newsletter-submit-button').click();
      cy.contains('Imię ma niepoprawny format!').should('not.exist');
      cy.contains('Nazwisko ma niepoprawny format!').should('exist');
      cy.contains('Email ma niepoprawny format!').should('exist');
  
      cy.getBySelector('newsletter-surname').type('Siwiec');
      cy.getBySelector('newsletter-submit-button').click();
      cy.contains('Imię ma niepoprawny format!').should('not.exist');
      cy.contains('Nazwisko ma niepoprawny format!').should('not.exist');
      cy.contains('Email ma niepoprawny format!').should('exist');
  
      cy.getBySelector('newsletter-email').type('siwiec.michal724@gmail.com');
      cy.getBySelector('newsletter-submit-button').click();
      cy.contains('Imię ma niepoprawny format!').should('not.exist');
      cy.contains('Nazwisko ma niepoprawny format!').should('not.exist');
      cy.contains('Email ma niepoprawny format!').should('not.exist');
    });
  });

  describe('configured data', () => {
    beforeEach(() => {
      cy.intercept('POST', '/graphql', (request) => {
        mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
        mockResponse({ request, operationName: 'User', fixturePath: 'user/personalDetails.json' });
      });

      cy.visit('/');
    });

    it("contains already configured user's data in user panel", () => {
      cy.get('#newsletter-form').within(() => {
        cy.getBySelector('newsletter-name').should('have.value', '');
        cy.getBySelector('newsletter-surname').should('have.value', 'Siwiec');
        cy.getBySelector('newsletter-email').should('have.value', 'siwiec.michal724@gmail.com');
      });
    });
  });

  describe('modals', () => {
    context('when user is saved sucesfully', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
        });
  
        cy.intercept('POST', '/graphql', (request) => {
          return delayAndMock({
            request,
            operationName: 'subscribeUserToNewsletter',
            fixturePath: 'subscribeUserToNewsletter/successResponse.json',
            statusCode: 200
          });
        });
  
        cy.visit('/');
      });
  
      it('shows loading and success modal after submit form', () => {
        cy.fillNewsletterForm();
        cy.checkPresenceOfLoadingAndSuccessModals({
          loadingModalInfo: 'Jesteś zapisywany na newsletter!',
          successModalInfo: 'Zostałeś zapisany na newsletter!'
        });
      });
    });

    context('when user is not saved sucesfully', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
        });
  
        cy.intercept('POST', '/graphql', (request) => {
          return delayAndMock({
            request,
            operationName: 'subscribeUserToNewsletter',
            fixturePath: 'subscribeUserToNewsletter/failedResponse.json',
            statusCode: 500
          });
        });
  
        cy.visit('/');
      });

      it('shows loading and failed modal after submit form', () => {
        cy.fillNewsletterForm();
        cy.checkPresenceOfLoadingAndErrorModals({
          loadingModalInfo: 'Jesteś zapisywany na newsletter!',
          errorModalInfo: 'Niestety nie udało się zapisać na newsletter!'
        });
      });
    });
  });
});
