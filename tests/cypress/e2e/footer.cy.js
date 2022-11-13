/// <reference types="cypress" />

describe('footer', () => {
  beforeEach(() => cy.visit('/'));

  context('regular documents', () => {
    context('presence', () => {
      it('is present in footer', () => {
        cy.getBySelector('policy-privacy-label')
          .should('have.text', 'Polityka prywatności')
  
        cy.getBySelector('shop-regulation-label')
          .should('have.text', 'Regulamin sklepu')
      });
    });

    context('modals', () => {
      it('shows policy privacy modal after hover on policy privacy tooltip', () => {
        cy.getBySelector('policy-privacy-prompt')
          .trigger('mouseover')
  
        cy.get('#policy-privacy-tooltip').should('be.visible');
      });
  
      it('shows shop-regulation modal after hover on shop-regulation tooltip', () => {
        cy.getBySelector('shop-regulation-prompt')
          .trigger('mouseover')
  
        cy.get('#shop-regulation-tooltip').should('be.visible');
      });
    });

    context('downloading documents', () => {
      const downloadedFilePrefix = 'tests/cypress/downloads/';

      it('downloads policy privacy document after click on policy privacy label', () => {
        cy.getBySelector('policy-privacy-label').click();
        cy.readFile(`${downloadedFilePrefix}polityka_prywatnosci.pdf`);
      });

      it('downloads regulation rules document after click on regulation document label', () => {
        cy.getBySelector('shop-regulation-label').click();
        cy.readFile(`${downloadedFilePrefix}regulamin_sklepu.pdf`);
      });
    });
  });

  context('products', () => {
    context('presence', () => {
      it('includes products part', () => {
        cy.getBySelector('toolsCathegoryLabel')
          .should('have.text', 'Narzędzia')
    
        cy.getBySelector('constructionChemicalsCathegoryLabel')
          .should('have.text', 'Chemia budowlana')
    
        cy.getBySelector('stairwayCathegoryLabel')
          .should('have.text', 'Schody')
    
        cy.getBySelector('roofZoneCathegoryLabel')
          .should('have.text', 'Strefa dachu')
    
        cy.getBySelector('foundationZoneCathegoryLabel')
          .should('have.text', 'Strefa fundamentu')
      });
    });

    context('redirects', () => {
      it('redirects to /products?type=tools', () => {
        cy.getBySelector('toolsCathegoryLabel').click();
        cy.url().should('eq', 'http://localhost:3003/products?type=tools')
      });

      it('redirects to /products?type=constructionChemicals', () => {
        cy.getBySelector('constructionChemicalsCathegoryLabel').click();
        cy.url().should('eq', 'http://localhost:3003/products?type=constructionChemicals')
      });

      it('redirects to /products?type=stairway', () => {
        cy.getBySelector('stairwayCathegoryLabel').click();
        cy.url().should('eq', 'http://localhost:3003/products?type=stairway')
      });

      it('redirects to /products?type=roofZone', () => {
        cy.getBySelector('roofZoneCathegoryLabel').click();
        cy.url().should('eq', 'http://localhost:3003/products?type=roofZone')
      });

      it('redirects to /products?type=foundationZone', () => {
        cy.getBySelector('foundationZoneCathegoryLabel').click();
        cy.url().should('eq', 'http://localhost:3003/products?type=foundationZone')
      });
    }); 
  });

  context('contact', () => {
    context('presence', () => {
      it('includes contact part', () => {
        cy.getBySelector('email-contact-label')
          .should('have.text', ' siwiec.michal724@gmail.com')
    
        cy.getBySelector('phone-contact-label')
          .should('have.text', ' 724 131 140')
      });
    })
  })

  context('socials', () => {
    context('presence', () => {
      it('includes social media part', () => {
        cy.getBySelector('facebook-icon')
        cy.getBySelector('instagram-icon')
        cy.getBySelector('youtube-icon')
        cy.getBySelector('twitter-icon')
        cy.getBySelector('tiktok-icon')
      });
    })
  });
});
