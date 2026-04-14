/// <reference types ="cypress" />
export const AddAChildPage = {
    
    /*getClickWait(){
        return cy.wait(5000);
    },

    getUrl(){
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

    getClickAddNewChild(){
        return cy.contains("Add a new child");
    },

    getAssertionAddChild(){
        return cy.get('.text-xl').should('contain','Add Child');
    },

    getClickNo(){
        return cy.get("#No");
    },

    getClickNextButton() {
        return cy.get(".bg-gray-500");
    },

    getSelectMonth(){
        return cy.get('[style="display: flex; margin-left: 27%;"] > :nth-child(1) > .px-3');
    },

    getSelectDay(){
        return cy.get(":nth-child(2) > .px-3");
    },

    getSelectYear(){
        return cy.get(":nth-child(3) > .px-3");
    },

    getClickNextButtonAfterDateSelection() {
        return cy.get(".bg-gray-500");
    },

    getFillUsername(){
        return cy.get("#gemail");
    },

    getTypePassword(){
        return cy.get('[placeholder="Password"]');
    },
    
    getClickTerms(){
        return cy.get("#terms");
    },

    getClickCreateButton(){
        return cy.contains("Create and Add")
    },

   /*getClickEnroll(){
        return cy.contains('Enroll Goodsoul112');

    },*/

    

    

  

}