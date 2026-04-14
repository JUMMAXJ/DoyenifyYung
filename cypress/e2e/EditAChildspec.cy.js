///<reference types="cypress"/>
import { EditAChildPage } from "../Pages/EditAChidPageObject.js";

describe('Edit a Child detail Test', () => {
    const user = Cypress.env("users").ValidUser;
    const email = "beeneing1944@armyspy.com";
    const password = "Joy12345";
    beforeEach(() => {
        cy.login(email,password);
    })
    it('User should be able to edit a child details successfully', () => {
        
        const ChildUsername = "Goodsoul12";
        const ChildPassword = "Gloory1*";
        const firstName = "Joy"
        const lastName = "Peace";
        const number = "57750234";
        const Good = "Good";
        const Soul = "Soul";
        const incorrectEmail = "Peace12@.com";
        const incorrectPassword = "joy12";
        const warningText ="Must be at least 8 characters, have a number, and a capital letter";
        const requiredText1 = "Email/Username is required";
        const requiredText2 = "Password is required";

        
        //EditAChildPage.getClickWait();
        //EditAChildPage.getUrl();
        EditAChildPage.getUrlDashboard();
        EditAChildPage.getAssertionWelcome();
        EditAChildPage.getClickWaitAgain();
        EditAChildPage.getClickEditIcon().click({ force:true});
        EditAChildPage.getFillFirstName().clear().type(firstName);
        EditAChildPage.getFillLastName().clear().type(lastName);
        EditAChildPage.getFillNumber().clear().type(number);
        EditAChildPage.getClickSaveChanges().click({force:true});
        EditAChildPage.getValidationMessage();
        

    });
});