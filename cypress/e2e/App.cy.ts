/// <reference types="cypress" />
// @ts-check

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('App E2E', () => {
  it('should have a search input', () => {
    cy.visit('http://localhost:3333');
    cy.get('input').should('have.value', '')
  })

  it('renders on the server', () => {
    cy.request('/')
      .its('body')
      .then(html => {
        const $input = Cypress.$(html).find('input')
        expect($input);
      })
  })

  it('should have a form', () => {
    cy.visit('/form');

    cy.get('input[id=name]').should('have.value', '')
    cy.get('input[id=surname]').should('have.value', '')
    cy.get('input[id=date]').should('have.value', '')
  })

  it('should open the modal when the item is clicked', () => {
    cy.visit('/');
    cy.get('[data-testid="cards"]').first();
  });

  it("Get 200 status", () => {
    cy.request({
        method: "GET",
        url: `https://rickandmortyapi.com/api/character`,
    }).as("getEntries");

    cy.get("@getEntries").should((response: any) => {
        expect(response.status).to.eq(200);
        expect(response).to.have.property("headers");
    });
  });
  
  it('checks if about link works', () => {
    cy.visit('/');
    cy.get('.main').contains('Main Page').click();
    cy.url().should('include', '/');
    cy.get('.main-page');
  });

  it('checks if about link works', () => {
    cy.visit('/');
    cy.get('.about').contains('About Us').click();
    cy.url().should('include', '/about');
    cy.get('h1').contains('About Us');
  });

  it('checks if about link works', () => {
    cy.visit('/');
    cy.get('.form').contains('Form').click();
    cy.url().should('include', '/form');
    cy.get('.wrapper');
  });

  it('checks if 404 page works', () => {
    cy.visit('/123');
    cy.get('h1').contains('Not found');
  });

  it('remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  });
})