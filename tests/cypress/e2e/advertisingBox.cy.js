/// <reference types="cypress" />

describe('advertisingBox.cy', () => {
  beforeEach(() => cy.visit('/'));

  it('shows advertising elements', () => {
    cy.contains('Największy sklep budowlany w Polsce');
    cy.contains('Tysiące produktów wysokiej jakości');
  });
});
