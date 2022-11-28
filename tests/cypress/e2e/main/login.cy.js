import { mockResponse } from '../../support/utils/graphql.js';

/// <reference types="cypress" />

describe('login', () => {
  describe('url', () => {
    beforeEach(() => {
      cy.intercept('POST', '/graphql', (request) => {
        mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
      });

      cy.visit('/login');
    });

    it('has valid url', () => {
      cy.checkURL('login');
    });
  });

  describe('redirects', () => {
    beforeEach(() => {
      cy.intercept('POST', '/graphql', (request) => {
        mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
      });

      cy.visit('/login');
    });

    it('redirects to home page when user is logged and try to visit login page', () => {
      cy.checkURL();
    });
  });

  describe('page elements', () => {
    beforeEach(() => {
      cy.intercept('POST', '/graphql', (request) => {
        mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/notLogged.json' });
      });

      cy.visit('/login');
    });

    it('checks if page contains demand elements', () => {
      cy.getBySelector('login-header')
        .should('exist')
        .and('have.class', 'login__active-link');
      cy.getBySelector('login-email-input').should('exist');
      cy.getBySelector('login-password-input').should('exist');
      cy.getBySelector('login-submit-btn').should('exist');
    });
  });

  describe('authorization', () => {
    context('success path', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'loginUser', fixturePath: 'loginUser/success.json' });
        });

        cy.visit('/login');
      });

      it('login user with success', () => {
        cy.fillLoginForm();
        cy.checkURL();
        cy.contains('Logowanie').should('not.exist');
        cy.contains('Rejestracja').should('not.exist');
        cy.contains('Wyloguj').should('exist');
      });
    });

    // TODO
    context('failure path', () => {

    });
  });

  describe('validation', () => {
    beforeEach(() => {
      cy.intercept('POST', '/graphql', (request) => {
        mockResponse({ request, operationName: 'loginUser', fixturePath: 'loginUser/success.json' });
      });

      cy.visit('/login');
    });

    it('checks form validation', () => {
      cy.getBySelector('login-submit-btn').click();
      cy.contains('Email ma niepoprawny format!').should('exist');
      cy.contains('Hasło ma niepoprawny format!').should('exist');

      cy.getBySelector('login-email-input').type('siwiec.michal724@gmail.com');
      cy.getBySelector('login-submit-btn').click();
      cy.contains('Email ma niepoprawny format!').should('not.exist');
      cy.contains('Hasło ma niepoprawny format!').should('exist');

      cy.getBySelector('login-password-input').type('Jk765df22zcs2');
      cy.getBySelector('login-submit-btn').click();
      cy.contains('Email ma niepoprawny format!').should('not.exist');
      cy.contains('Hasło ma niepoprawny format!').should('not.exist');
    });
  });
});
