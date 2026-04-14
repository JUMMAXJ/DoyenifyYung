/// <reference types ="cypress" />
export const EditAChildPage = {
    

    /*getUrl(){
        return cy.url().should('contain','https://test.yung.doyenify.com');
    },*/

    getUrlDashboard(){
        return cy.url().should('contain','https://test.yung.doyenify.com/dashboard');
    },

    getAssertionWelcome(){
        return cy.get('.font-semibold').should('contain','Good day, Joy');
    },

    getClickWaitAgain(){
        return cy.wait(5000);
    },


    getClickNextButtonAfterChildDetails(){
        return cy.get(".bg-gray-500");
    },

    getClickEditIcon(){
        return cy.get('[alt="edit"]');
    },

    getFillFirstName(){
        return cy.get('input[placeholder="Joy"]');
    },


    getFillLastName(){
        return  cy.get('input[Placeholder="Peace"]');
    },

    getFillNumber(){
        return cy.get('input[placeholder="57750234"]'); 
    },

    getClickSaveChanges(){
        return cy.contains("Save Changes"); 
    },

    getValidationMessage(){
        return cy.contains('Your details are successfully changed!').should('exist');

    },
    

  

}