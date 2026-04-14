/// <reference types="cypress" />

describe('Yung Doyen Signup', () => {

  const Email = "andow122@dayrep.com";
  const firstName = "Joy";
  const lastName = "Peace";
  const Password = "Joy1234";
  const ConfirmPassword = "Joy1234";
  const Password1 = "Peacejoy*1";
  const ConfirmPassword1 = "Peacejoy*1";
  const Month = "January";
  const Day = "1";
  const Year = "2015";
  const Username = "Israel";

  beforeEach(() => {
    cy.visit('https://test.yung.doyenify.com');
  });

  it.skip('Registers a new user and proceeds to OTP verification', () => {

     // Navigate to SignUp
     cy.get('[href="/"] > div > img').click();
     cy.contains('SignUp').click();

     // Select student role
     cy.get(':nth-child(3) > .grid > :nth-child(1) > div').click();

     // Select country
     cy.get('[style*="border: 1px solid"]').select({force:true});

     // Fill basic details
     cy.get('#Email').type(Email);
     cy.get('#FirstName').type(firstName);
     cy.get('#LastName').type(lastName);
     cy.get('[placeholder="Enter your password"]').type(Password);
     cy.get('[placeholder="Confirm your password"]').type(ConfirmPassword);
 
     // Submit first step
     cy.get('[type="submit"]').click();

     // Ensure still on SignUp page
     cy.location('pathname').should('eq', '/SignUp');

      // Fill DOB
     cy.get('.grid > :nth-child(3) > div').click();
     cy.get(':nth-child(1) > .px-3').select(Month);
     cy.get(':nth-child(2) > .dobSelect').select(Day);
     cy.get(':nth-child(3) > .dobSelect').select(Year);

     // Continue
     cy.get('[style*="background-color: rgb(254, 90, 29)"]').click();

     // Enter email again
     cy.get('#gemail').type(Email);
     cy.get('[style*="background-color: rgb(254, 90, 29)"]').click();

     // Enter username
     cy.get('#gemail').clear().type(Username);
     cy.get('[style*="background-color: rgb(254, 90, 29)"]').click();

     // Enter final password
     cy.get(':nth-child(2) > .relative > .w-full').type(Password1);
     cy.get(':nth-child(3) > .relative > .w-full').type(ConfirmPassword1);

      // Intercept OTP API
     cy.intercept('POST', '**/send-otp').as('sendOtp');

     // Submit final step
     cy.get('[style*="background-color: rgb(254, 90, 29)"]').click();

     // Wait for OTP API to fire
     cy.wait('@sendOtp');

     // Wait for redirect to OTP page
     cy.location('pathname', { timeout: 15000 }).should('include', 'verifyotp');

     // Enter OTP
     cy.get('input[placeholder="Enter OTP"]', { timeout: 15000 }).should('be.visible').type('123456');

     // Verify OTP
     cy.contains('button', 'Verify Code').should('be.visible').click();
  });

  it('Fogot password',()=>{
    cy.visit('/');
    
  });

});
