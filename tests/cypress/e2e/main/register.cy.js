import { mockResponse, delayAndMock } from '../../support/utils/graphql.js';

/// <reference types="cypress" />

describe('registration', () => {
  describe('url', () => {
    beforeEach(() => {
      cy.intercept('POST', '/graphql', (request) => {
        mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
      });

      cy.visit('/register');
    });

    it('checks url', () => {
      cy.checkURL('register');
    });
  });

  describe('redirect', () => {
    beforeEach(() => {
      cy.intercept('POST', '/graphql', (request) => {
        mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
      });

      cy.visit('/register');
    });

    it('redirects to home page when user is logged and try to visit register page', () => {
      cy.checkURL();
    });
  });

  describe('page elements', () => {
    beforeEach(() => {
      cy.intercept('POST', '/graphql', (request) => {
        mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
      });

      cy.visit('/register');
    });

    it('checks form presence', () => {
      cy.getBySelector('register-email-input').should('exist');
      cy.getBySelector('register-password-input').should('exist');
      cy.getBySelector('register-file-input').should('exist');
      cy.getBySelector('register-submit-btn').should('exist');
    });

    it('checks if password is dotted', () => {
      cy.getBySelector('register-password-input')
        .invoke('attr', 'type')
        .should('eq', 'password');
    });
  });

  describe('validation', () => {
    beforeEach(() => {
      cy.intercept('POST', '/graphql', (request) => {
        mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
      });

      cy.visit('/register');
    });

    it('validates register form', () => {
      cy.getBySelector('register-submit-btn').click();
      cy.contains('Email ma niepoprawny format!').should('exist');
      cy.contains('Hasło ma niepoprawny format!').should('exist');

      cy.getBySelector('register-email-input').type('siwiec.michal724@gmail.com');
      cy.getBySelector('register-submit-btn').click();
      cy.contains('Email ma niepoprawny format!').should('not.exist');
      cy.contains('Hasło ma niepoprawny format!').should('exist');

      cy.getBySelector('register-password-input').type('A678gshj2Zv');
      cy.getBySelector('register-submit-btn').click();
      cy.contains('Email ma niepoprawny format!').should('not.exist');
      cy.contains('Hasło ma niepoprawny format!').should('not.exist');
    });
  });

  describe('modals', () => {
    context('success path', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
        });

        cy.intercept('POST', '/graphql', (request) => {
          return delayAndMock({
            request,
            operationName: 'registerUser',
            fixturePath: 'registerUser/success.json',
            statusCode: 200
          })
        });
  
        cy.visit('/register');
      });

      it('shows loading and success modal', () => {
        cy.fillRegisterForm();
        cy.checkPresenceOfLoadingAndSuccessModals({
          loadingModalInfo: 'Rejestrujemy użytkownika!',
          successModalInfo: 'Twoje konto zostało pomyślnie założone!'
        })
      });
    });

    context('failure path', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
        });

        cy.intercept('POST', '/graphql', (request) => {
          return delayAndMock({
            request,
            operationName: 'registerUser',
            fixturePath: 'registerUser/fail.json',
            statusCode: 500
          })
        });
  
        cy.visit('/register');
      });

      it('shows loading and success modal', () => {
        cy.fillRegisterForm();
        cy.checkPresenceOfLoadingAndErrorModals({
          loadingModalInfo: 'Rejestrujemy użytkownika!',
          errorModalInfo: 'Niestety nie udało się zarejestrować nowego konta.'
        })
      });
    });
  });

  describe('login', () => {
    context('success path', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
          mockResponse({ request, operationName: 'registerUser', fixturePath: 'registerUser/success.json' });
        });
  
        cy.visit('/register');
      });

      it('logins user after registration', () => {
        cy.fillRegisterForm();
        cy.contains('Zaloguj się').click();
        cy.contains('Logowanie').should('not.exist');
        cy.contains('Rejestracja').should('not.exist');
        cy.contains('Wyloguj').should('exist');
      });
    });

    context('failure path', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
          mockResponse({
            request,
            operationName: 'registerUser',
            fixturePath: 'registerUser/fail.json',
            statusCode: 500
          });
        });
  
        cy.visit('/register');
      });

      it('does not login user after registration', () => {
        cy.fillRegisterForm();
        cy.get('body').type('{esc}');
        cy.contains('Logowanie').should('exist');
        cy.contains('Rejestracja').should('exist');
        cy.contains('Wyloguj').should('not.exist');
      });
    });
  });
});
