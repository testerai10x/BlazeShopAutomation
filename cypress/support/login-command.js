/// <reference types="cypress" />

Cypress.Commands.add('login', (email, password) => {
   cy.fixture('login-elements').then((loginElements) => {
    cy.get(loginElements.login_link).click();
    cy.get(loginElements.username).type(email);
    cy.get(loginElements.password).type(password);
    cy.get(loginElements.login_submit).click();
   })
})