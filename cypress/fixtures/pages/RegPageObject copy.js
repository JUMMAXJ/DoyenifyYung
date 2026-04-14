/// <reference types= "cypress" />

export const RegistrationPage = {
  getLogo(){
    return cy.get('[href="/"] > div > img');
  },
  
  getSignUp(){
    return cy.contains("SignUp");
  },
  
    
  getParent(){
    return cy.get(':nth-child(3) > .grid > :nth-child(1) > div');
  },
    
  getSignUpWithEmail() {
    return cy.get('div[style="text-align: center;"]').contains('Sign Up with Email');

  },
  
  getFillEmail() {
    return cy.get('#Email');
  },
  
  getFillFirstName() {
    return cy.get('#FirstName');
  },
  
  getFillLastName() {
   return cy.get('#LastName');
  },

  getSelectCountry(){
    return cy.get('.PhoneInputCountrySelect');
  },

  getFillPhoneNumber(){
    return cy.get('.PhoneInputInput');
  },
  
  getFillPassword() {
    return cy.get('[placeholder="Enter your password"]');
  },
  
  getFillConfirmPassword() {
    return  cy.get('[placeholder="Confirm your password"]');
  },
   
  
  getSubmit() {
    return  cy.get('[type="submit"]');
  },
  
  
  getLearner(){
    return cy.get('.grid > :nth-child(3) > div');
  },
  
  getFillMonth(){
    return cy.get(':nth-child(1) > .px-3');
  },
    
  getFillDay(){
    return cy.get(':nth-child(2) > .dobSelect');
  },

  getFillYear(){
    return cy.get(':nth-child(3) > .dobSelect');
  },

  getNextDOB(){
    return cy.get('div[style="text-align: center;"]').contains('Next'); 
 },

  getFillParentEmail(){
   return cy.get('#gemail');
  },

  getNextParent(){
   return cy.get('div[style="text-align: center;"]').contains('Next');
  },

  getFillUserName(){
    return cy.get('#gemail');
 },

  getNextUsername(){
    return cy.get('div[style="text-align: center;"]').contains('Next');
 },

  getFillPassword1(){
    return cy.get(':nth-child(2) > .relative > .w-full');
 },

  getFillConfirmPassword1(){
   return cy.get(':nth-child(3) > .relative > .w-full');
  },

  getCreateAccount(){
   return cy.get('div[style="text-align: center;"]').contains('Create Account');
  },

  getAssertion(){
    return cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible');
  },

  getUrl(){
    return cy.url().should('contain','https://test.yung.doyenify.com/');
  },

  getSignUpAssertion(){
    return cy.location('pathname').should('eq','/SignUp');
  },
}
  
