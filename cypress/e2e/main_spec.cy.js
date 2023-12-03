/// <reference types="cypress" />

describe('API Interception', () => {

  it('Intercept API', function(){

    cy.intercept('GET', 'https://www.demoblaze.com/index.html').as('getHome')
    cy.visit('https://www.demoblaze.com/index.html')
    cy.wait('@getHome').then((home => {  
    cy.log(home)
    expect(home.response.statusCode).to.eq(200)
    expect(home.response.statusMessage).to.eq('OK')

    }))
  })
})










describe('Testcase #1 Login', () => {

  beforeEach(function(){

    cy.fixture('login-data').then((loginData) => {
      this.loginData = loginData;
    })

    cy.visit('https://www.demoblaze.com/index.html')
  })

  it('Login Test', function(){

    cy.login(this.loginData.users.username, this.loginData.users.password)
    cy.get(this.loginData.users.name_user).should('be.visible')

  })
})