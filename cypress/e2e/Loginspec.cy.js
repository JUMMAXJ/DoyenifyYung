///<reference types = "cypress"/>
import {ValidUserLoginPage, InvalidUserLoginPage1, InvalidUserLoginPage2, EmptyFieldLoginPage } from '../Pages/LoginPageObject.js'

const ValidUserLogin = new ValidUserLoginPage();
const InvalidUserLogin1 = new InvalidUserLoginPage1();
const InvalidUserLogin2 = new InvalidUserLoginPage2();
const EmptyFieldLogin =new EmptyFieldLoginPage();
const user = Cypress.env("users").ValidUser
    
    
describe('Login Test',()=>{
    

    

    beforeEach(() => {
        cy.visit('/')
    });

    const Email = ("beeneing1944@armyspy.com");
    const Password = ("Joy12345");
    const InvalidEmail = ("Peace12@.com");
    const incorrectPassword = ("Joy12");
    const warningText=('Must be at least 8 characters, have a number, and a capital letter')
    const requiredText1=('Email/Username is required');
    const requiredText2=('Password is required');

    it('user should login successfully with valid credentials',() => {
        ValidUserLogin.getClickLogin().click();
        ValidUserLogin.getFillEmail().type(Email);
        ValidUserLogin.getFillPassword().type(Password);
        ValidUserLogin.getSubmit().click();
        ValidUserLogin.getUrl();
        ValidUserLogin.getLocation();
 
    });
    
    it('User login with an invalid credentials',() => {
        InvalidUserLogin1.getClickLogin().click();
        InvalidUserLogin1.getFillEmail().type(Email);
        InvalidUserLogin1.getFillPassword().type(incorrectPassword);
        InvalidUserLogin1.getSubmit().click();
        InvalidUserLogin1.verifyErrorMessage(warningText);
        InvalidUserLogin1.getUrl();
        InvalidUserLogin1.getLocation();
        
      
    });
    
    

    it('shows error when user login with Invalid credentials',() => {
        InvalidUserLogin2.getClickLogin().click();
        InvalidUserLogin2.getFillEmail().type(InvalidEmail);
        InvalidUserLogin2.getFillPassword().type(Password);
        InvalidUserLogin2.getSubmit().click();
        InvalidUserLogin2.getUrl();
        InvalidUserLogin2.getLocation();
 
    });

    it('Shows error when user login with an empty field',() => {
        EmptyFieldLogin.getClickLogin().click();
        EmptyFieldLogin.getSubmit().click();
        EmptyFieldLogin.getUrl();
        EmptyFieldLogin.getLocation();
        //cy.get('.flex > :nth-child(1) > div > .validation-error-message').should('contain',requiredText1);
       // cy.get('.relative.w-full > .mb-3 > [style="width: 400px;"] > .validation-error-message').should('contain',requiredText2)
       EmptyFieldLogin.getErrorMessage1(requiredText1);
       EmptyFieldLogin.getErrorMessage2(requiredText2);
 
    });
})

