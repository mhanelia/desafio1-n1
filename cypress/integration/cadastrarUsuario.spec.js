/// <reference types="cypress" />
let Chance = require('chance')
let chance = new Chance()

describe('Tela de cadastro', () => {
    it('Cadastrar novo usuário', () => {
        cy.visit('index.php')
        cy.get('.login').click()
        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate').click()

        cy.get('.radio#uniform-id_gender1').click()
        cy.get('#customer_firstname').type(chance.first())
        cy.get('#customer_lastname').type(chance.last())
        cy.get('#passwd').type('Senha1@2021')
        cy.get('#days').select('10')
        cy.get('#months').select('10')
        cy.get('#years').select('1981')
        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('#company').type(chance.company())
        cy.get('#address1').type(chance.address())
        cy.get('#city').type(chance.city())
        cy.get('#id_country').select('United States')
        cy.get('#id_state').select('California')
        cy.get('#postcode').type(chance.zip())
        
        cy.get('#phone_mobile').type(chance.phone({ country: 'us', mobile: true }))
        cy.get('#submitAccount').click()
    

        cy.get('.info-account').should('contain.text', 'Welcome to your account')
        cy.url().should('include', 'controller=my-account')

    
    });

    
});