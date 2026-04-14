/// <reference types="cypress"/>

export const LogoutPage = {

    
    getClickList(){
        return cy.get('svg');
    },

    
    getClickLogout(){
        return cy.get('.null > .flex > .text-lg');
    },
    
    getSvgAssertion(){
        return cy.get('div svg').first().should('exist');
    },

    getUrl(){
        return cy.url().should('contain','https://test.yung.doyenify.com');
    }
}
 
        


        