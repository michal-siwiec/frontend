/// <reference types="cypress" />

describe('about', () => {
  beforeEach(() => cy.visit('/about'));

  it('finds shop description', () => {
    cy.contains('Początki sklepu budowlanego BUDOMAN').should('exist');
  });

  it('finds teams memeber', () => {
    cy.getBySelector('manager-0').within(() => {
      cy.contains('Małgorzata Lewandowska').should('exist');
      cy.contains('Prezes zarządu').should('exist');
    });

    cy.getBySelector('manager-1').within(() => {
      cy.contains('Łukasz Nowak').should('exist');
      cy.contains('Dyrektor ds. wzrostu').should('exist');
    });

    cy.getBySelector('manager-2').within(() => {
      cy.contains('Aleksander Winny').should('exist');
      cy.contains('Menager magazynu').should('exist');
    });

    cy.getBySelector('manager-3').within(() => {
      cy.contains('Paweł Niegodziwy').should('exist');
      cy.contains('Starszy sprzedawca').should('exist');
    });
  });
});
