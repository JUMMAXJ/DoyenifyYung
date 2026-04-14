///<reference types="cypress"/>
import { DashboardPage }  from "../Pages/DashboardPageObject.js";

describe('Dashboard Test', () => {
    const user = Cypress.env("users").ValidUser;

    beforeEach(() => {
        cy.visit('/');
    })
    it('User should be able to view the dashboard', () => {
        const Email = "beeneing1944@armyspy.com";
        const Password = "Joy12345";
        const ChildUsername = "Goodsoul12";
        const ChildPassword = "Gloory1*";
        const user = "Good";
        const lastName = "Soul";
        const number = "57750234";
        const Good = "Good";
        const Soul = "Soul";
        const incorrectEmail = "Peace12@.com";
        const incorrectPassword = "joy12";
        const warningText ="Must be at least 8 characters, have a number, and a capital letter";
        const requiredText1 = "Email/Username is required";
        const requiredText2 = "Password is required";

        DashboardPage.getClickLogin().click();
        DashboardPage.getFillEmail().type(Email);
        DashboardPage.getFillPassword().type(Password);
        DashboardPage.getSubmit().click();
        DashboardPage.getUrl();
        DashboardPage.getUrlDashboard();
        DashboardPage.getAssertionWelcome();
        DashboardPage.getClickAddNewChild().click({ force:true});
        DashboardPage.getAssertionAddChild();
        DashboardPage.getClickNo().click();
        DashboardPage.getClickNextButton().click();
        DashboardPage.getSelectMonth().select("January");
        DashboardPage.getSelectDay().select("1");
        DashboardPage.getSelectYear().select("2015");
        DashboardPage.getClickNextButtonAfterDateSelection().click();
        DashboardPage.getFillUsername().type(ChildUsername);
        DashboardPage.getTypePassword().type(ChildPassword);
        DashboardPage.getClickTerms().click();
        DashboardPage.getClickNextButtonAfterChildDetails().click();
        DashboardPage.getClickEditIcon().click({ force:true});
        DashboardPage.getFillFirstName().clear().type(user);
        DashboardPage.getFillLastName().clear().type(lastName);
        DashboardPage.getFillNumber().clear().type(number);
        DashboardPage.getClickSaveChanges().click({force:true});
        DashboardPage.getClickEnroll().click({ force:true});
        DashboardPage.getClickCourse().click({ force:true});
        DashboardPage.getClickBackButton().click({force:true});
        DashboardPage.getClickCourse().click({ force:true});
        DashboardPage.getClickProceedToPayment().click({ force:true});
        DashboardPage.getWaitForPayment();
        DashboardPage.getClickPayNow().click({ force:true});
        DashboardPage.getAssertionYearlyPlan();


    });
});