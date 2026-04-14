/// <reference types ="cypress" />
export const DashboardPage = {
    getClickLogin(){
        return cy.contains('Login');
   },

    getFillEmail(){
     return cy.get('#Email');
   },

   getFillPassword(){
      return cy.get('#Password');
   },
 
   getSubmit(){
     return cy.get('[type="submit"]');
    },

    getUrl(){
        return cy.url().should('contain','https://test.yung.doyenify.com');
    },

    getUrlDashboard(){
        return cy.url().should('contain','https://test.yung.doyenify.com/dashboard');
    },

    getAssertionWelcome(){
        return cy.get('.font-semibold').should('contain','Good day, Joy');
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

    getClickNextButtonAfterChildDetails(){
        return cy.get(".bg-gray-500");
    },

    getClickEditIcon(){
        return cy.get('[alt="edit"]');
    },

    getFillFirstName(){
        return cy.get('input[Placeholder="Good"]');
    },

    getFillLastName(){
        return  cy.get('input[Placeholder="Soul"]');
    },

    getFillNumber(){
        return cy.get('input[Placeholder="57750234"]');
    },

    getClickSaveChanges(){
        return cy.contains("Save Changes");
    },

    getClickEnroll(){
        return cy.contains("Enroll");
    },

    getClickCourse(){
        return cy.contains("Python Programming Basics").parent();
    },

    getClickBackButton(){
        return cy.contains("Back");
    },

    getClickCourse(){
        return cy.contains("Python Programming Basics").parent();
    },

    getClickProceedToPayment(){
        return cy.get(".mt-7 > .rounded-full");
    },

    getWaitForPayment(){
        return cy.wait(2000);
    },

    getClickPayNow(){
        return cy.contains("Pay Now").parent();
    },

    getAssertionYearlyPlan(){
        return cy.get(":nth-child(4) > .gap-4 > .flex > .text-xs");
    },






   

  

}