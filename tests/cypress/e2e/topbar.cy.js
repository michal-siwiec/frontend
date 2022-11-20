/// <reference types="cypress" />

import widthBreakpoints from '../../../src/data/widthBreakpoints.js';
import { mockResponse } from '../support/utils/graphql.js';

describe('topbar', () => {
  context('elements presence', () => {
    beforeEach(() => cy.visit('/'));

    context('mobile', () => {
      beforeEach(() => {
        cy.viewport(widthBreakpoints.md, 750);
      });

      context('before click in hamburger menu', () => {
        it('checks if elements are present', () => {
          cy.getBySelector('topbar-hamburger-menu').should('exist');
          cy.getBySelector('topbar-logo').should('exist');
          cy.getBySelector('topbar-menu-list').should('not.exist');
          cy.getBySelector('topbar-search-engine').should('not.exist');
          cy.getBySelector('topbar-basket').should('not.exist');
          cy.getBySelector('topbar-authorization').should('not.exist');
        });
      });

      context('after click in hamburger menu', () => {
        beforeEach(() => {
          cy.getBySelector('topbar-hamburger-menu').click();
        });

        it('slide out mobile menu drawer', () => {
          cy.getBySelector('menu-drawer')
            .should('exist')
            .and('contain', 'Logowanie')
            .and('contain', 'Rejestracja')
            .and('contain', 'Produkty')
            .and('contain', 'O nas')
            .and('contain', 'Opinie')

          cy.getBySelector('menu-drawer').within(() => {
            cy.getBySelector('topbar-search-engine').should('exist');
            cy.getBySelector('topbar-basket').should('exist');
          });
        });
      });
    });

    context('desktop', () => {
      it('checks if elements are present', () => {
        cy.getBySelector('topbar-logo').should('exist');
        cy.getBySelector('topbar-search-engine').should('exist');
        cy.getBySelector('topbar-basket').should('exist');
        cy.getBySelector('topbar-authorization').should('exist');
        cy.getBySelector('topbar-hamburger-menu').should('not.exist');
        cy.getBySelector('topbar-menu-list')
          .should('contain', 'Produkty')
          .and('contain', 'O nas')
          .and('contain', 'Opinie')
      });
    });
  });

  context('links', () => {
    it('redirects to products page after click in products label', () => {
      cy.getBySelector('products-label').click();
      cy.url().should('eq', 'http://localhost:3003/products');
    });

    it('redirects to about page after click in about label', () => {
      cy.getBySelector('about-label').click();
      cy.url().should('eq', 'http://localhost:3003/about');
    });

    it('redirects to products page after click in products label', () => {
      cy.getBySelector('opinions-label').click();
      cy.url().should('eq', 'http://localhost:3003/opinions');
    });

    context('authorization', () => {
      context('when user is not logged', () => {
        beforeEach(() => cy.visit('/'));

        it('redirects to login page after click in Login label', () => {
          cy.getBySelector('topbar-login-label').click();
          cy.getBySelector('login-submit-btn').should('exist');
          cy.url().should('eq', 'http://localhost:3003/login');
        });
    
        it('redirects to register page after click in Login label', () => {
          cy.getBySelector('topbar-register-label').click();
          cy.getBySelector('register-submit-btn').should('exist');
          cy.url().should('eq', 'http://localhost:3003/register');
        });

        it('does not find logout label', () => {
          cy.getBySelector('topbar-logout-label').should('not.exist');
        });
      });
      
      context('when user is logged', () => {
        beforeEach(() => {
          cy.intercept('POST', '/graphql', (request) => {
            mockResponse({ request, operationName: 'IsUserLogged', fixturePath: 'isUserLogged/logged.json' });
          });

          cy.visit('/');
        });

        it('does not find login label', () => {
          cy.getBySelector('topbar-login-label').should('not.exist');
        });

        it('does not find register label', () => {
          cy.getBySelector('topbar-register-label').should('not.exist');
        });

        it('redirects to user panel after click in avatar', () => {
          cy.getBySelector('topbar-avatar').click();
          cy.url().should('eq', 'http://localhost:3003/user-panel');
        });

        it('redirect to home page after click in logout label', () => {
          cy.getBySelector('topbar-avatar').click();
          cy.getBySelector('topbar-logout-label').click();
          cy.url().should('eq', 'http://localhost:3003/');
        });
      });
    });
  });

  context('basket', () => {
    context('empty basket', () => {
      beforeEach(() => cy.visit('/'));

      it('shows initial price in basket', () => {
        cy.getBySelector('topbar-basket-price').contains('0.00 zł');
      });

      it('shows empty basket modal after click on basket icon', () => {
        cy.getBySelector('topbar-basket-icon').click();
        cy.get('#empty-basket-modal').should('exist');
      });
    });

    context('not empty basket', () => {
      beforeEach(() => {
        cy.intercept('POST', '/graphql', (request) => {
          mockResponse({ request, operationName: 'ProductsDetails', fixturePath: 'promotedProducts.json' });
        });

        cy.visit('/');
        cy.getBySelector('product-0').within(() => {
          cy.getBySelector('add-to-basket-submit').click();
        });
      });

      it('shows total product in basket price', () => {
        cy.getBySelector('topbar-basket-price').contains('55.00 zł');
      });

      it('shows modal with products after click on basket', () => {
        cy.getBySelector('topbar-basket-icon').click();
        cy.get('#basket-with-products-modal').should('exist');
      });
    });
  });

  context('search engine', () => {
    beforeEach(() => cy.visit('/'));

    it('has disabled attributes', () => {
      cy.getBySelector('topbar-search-engine').should('be.disabled');
    });

    it('shows modal after hover on  search engine tooltip', () => {
      cy.getBySelector('search-engine-prompt')
        .trigger('mouseover');

      cy.get('#search-engine-tooltip').should('be.visible');
    });
  });
});
