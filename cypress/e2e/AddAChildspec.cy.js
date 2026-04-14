///<reference types="cypress"/>
import { AddAChildPage } from "../Pages/AddAChildPageObject.js";

describe('Add a Child Test', () => {
    const user = Cypress.env("users").ValidUser;

   const email = "beeneing1944@armyspy.com";
   const password = "Joy12345";
   
    beforeEach(() => {
        cy.login(email, password);
    })
    it('User should be able to add a child', () => {
        
        const ChildUsername = "Goodsoul12";
        const ChildPassword = "Gloory1*";
        const firstName = "Joy";
        const lastName = "Peace";
        const number = "57750234";
        const Good = "Good";
        const Soul = "Soul";
        const incorrectEmail = "Peace12@.com";
        const incorrectPassword = "joy12";
        const warningText ="Must be at least 8 characters, have a number, and a capital letter";
        const requiredText1 = "Email/Username is required";
        const requiredText2 = "Password is required";
        
        
        //AddAChildPage.getClickWait();
        //AddAChildPage.getUrl();
        AddAChildPage.getUrlDashboard();
        AddAChildPage.getAssertionWelcome();
        AddAChildPage.getClickWaitAgain();
        AddAChildPage.getClickAddNewChild().click({ force:true});
        AddAChildPage.getAssertionAddChild();
        AddAChildPage.getClickNo().click();
        AddAChildPage.getClickNextButton().click();
        AddAChildPage.getSelectMonth().select("January");
        AddAChildPage.getSelectDay().select("1");
        AddAChildPage.getSelectYear().select("2015");
        AddAChildPage.getClickNextButtonAfterDateSelection().click();
        AddAChildPage.getFillUsername().type(ChildUsername);
        AddAChildPage.getTypePassword().type(ChildPassword);
        AddAChildPage.getClickTerms().click();
        AddAChildPage.getClickCreateButton().click();
        //AddAChildPage.getClickEnroll().click({ force:true});
               
        
        
        
    });
});