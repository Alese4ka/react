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

  // it('should open the modal when the item is clicked', () => {
  //   cy.visit('/');
  //   cy.get('[data-testid="cards"]').first();
  // });
})