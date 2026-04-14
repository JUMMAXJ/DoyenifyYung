///<reference types="cypress"/>

export const ForgotPasswordPage = {
    getClickLogin(){
        return cy.contains("Login");
    },

    getFillEmail(){
        return cy.get("#Email");
    },

    getFillIncorrectPassword(){
        return cy.get('input[name="Password"]');
    },

    getUrl(){
        return cy.url().should("contain", "https://test.yung.doyenify.com");
    },

    getLocation(){
      return cy.location("pathname").should("eq", "/login");
    },

    getForgotPassword(){
        return cy.contains(/forgot your password/i);
    },

    getFillEmailForForgotPassword(){
       return cy.get('.mb-3 > .w-full');

    },

    getFillEmailForParent(){
        return cy.get ('#gemail');
    },

    getAssertionForParent(){
        return cy.get("#gemail").should("have.value", "Parent");
    },

    getContinueButton(){
        return cy.contains("button", "Continue");
    },

    getSubmitButton(){
      return cy.get('button[type="submit"]');
    },

    getAssertionForLinkSent(){
       return cy.contains("A link has been sent to your email. Use the link to reset your password").should("be.visible");
         
    },

    getSuccessMessage() { 
        return cy.contains("A link has been sent", { timeout: 10000 });
    },

    getLocationForForgotPassword(){
        return cy.location('pathname').should("eq", "/ForgotPassword");
    },












    
    
};
