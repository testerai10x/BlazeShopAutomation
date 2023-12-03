/// <reference types="cypress" />

Cypress.Commands.add('login', (email, password) => {
   cy.fixture('login-elements').then((loginElements) => {
    cy.get(loginElements.login_link).click();
    cy.get(loginElements.username).type(email, { delay: 0 });
    cy.get(loginElements.password).type(password, { delay: 0 });
    cy.get(loginElements.login_submit).click();
   })
})