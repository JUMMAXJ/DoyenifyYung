/// <reference types ="cypress"/>
describe('Yung Doyen Signup',() => {
    beforeEach (() =>{
        cy.visit('/');
    }) 
    before(() => {
        cy.log('This test hook will run once')
    })
    after(() => {
        cy.log ('This test hook will run after all the test cases have been executed')
    })
    afterEach (() => {
        cy.log('This test hook will run after each test case has been executed')
    })

  const Email= ("andow122@dayrep.com");
  const firstName = ("Joy");
  const lastName = ("Peace");
  const Password = ("Joy1234");
  const ConfirmPassword = ("Joy1234");
  const Password1 = ("Peacejoy*1");
  const ConfirmPassword1 = ("Peacejoy*1");
  const Month = ("January");
  const Day = ("1");
  const Year = ("2015");
  const Username = ("Israel");

  it('To register a new user account on Doyenify Academy YungDoyens', () => {
     cy.visit('https://test.yung.doyenify.com');
     //cy.contains('Home').click({force:true});
     cy.get('[href="/"] > div > img').click();
     cy.contains('SignUp').click();
     cy.get(':nth-child(3) > .grid > :nth-child(1) > div').click();
     cy.get('[style="border: 1px solid rgb(42, 42, 42); padding: 8px; border-radius: 10px; cursor: pointer;"] > div').click();
     cy.get('#Email').type(Email);
     cy.get('#FirstName').type(firstName);
     cy.get('#LastName').type(lastName);
     //cy.get('.mb-3 > .relative > .w-full').type('Joy1234');
     cy.get('[placeholder="Enter your password"]').type (Password);
     cy.get('[placeholder="Confirm your password"]').type(ConfirmPassword);
     cy.get('.text-red-500').should('be.visible');
     cy.get('[type="submit"]').click()
     //cy.get('.text-red-500').should('be.visible').and('contain','Password must be at least 8 characters long');
     cy.url().should('contain','https://test.yung.doyenify.com');
     cy.location('pathname').should('eq','/SignUp'); 
     cy.get('.grid > :nth-child(3) > div').click();
     cy.get(':nth-child(1) > .px-3').select(Month);
     cy.get(':nth-child(2) > .dobSelect').select(Day);
     cy.get(':nth-child(3) > .dobSelect').select(Year);
     cy.get('[style="background-color: rgb(254, 90, 29); padding: 8px; color: rgb(255, 255, 255); border-radius: 30px; cursor: pointer;"] > div').click();
     cy.get('#gemail').type(Email);
     cy.get('[style="background-color: rgb(254, 90, 29); padding: 8px; color: rgb(255, 255, 255); border-radius: 30px; cursor: pointer;"] > div').click();
     cy.get('#gemail').type(Username);
     cy.get('[style="background-color: rgb(254, 90, 29); padding: 8px; color: rgb(255, 255, 255); border-radius: 30px; cursor: pointer;"] > div').click();
     cy.get(':nth-child(2) > .relative > .w-full').type(Password1);
     cy.get(':nth-child(3) > .relative > .w-full').type(ConfirmPassword1);
     cy.get('[style="background-color: rgb(254, 90, 29); padding: 8px; color: rgb(255, 255, 255); border-radius: 30px; cursor: pointer;"] > div').click();
      
     // Intercept OTP API
     cy.intercept('POST', '**/send-otp').as('sendOtp');

     // Wait for OTP API to fire
     cy.wait('@sendOtp');

     // Wait for redirect to OTP page
     cy.location('pathname', { timeout: 15000 }).should('include', 'verifyotp');

     // Enter OTP
     cy.get('input[placeholder="Enter OTP"]', { timeout: 15000 }).should('be.visible').type('123456');

     // Verify OTP
     cy.contains('button', 'Verify Code').should('be.visible').click();
    });
      

    


   


})