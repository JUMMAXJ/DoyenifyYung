///<reference types= "cypress"/>
import { RegistrationPage } from "../Pages/RegPageObject.js";

describe("Registration Test", () => {
  const user = Cypress.env("users").validUser;

  beforeEach(() => {
    cy.visit("/");
  });

  it("for Registration Page", () => {
    const Email = "beeneing1944@armyspy.com";
    const firstName = "Joy";
    const lastName = "Peace";
    const Country = "Estonia";
    const PhoneNumber = "+37257850134";
    const Password = "Joy12345";
    const ConfirmPassword = "Joy12345";
    const Password1 = "Peacejoy*1";
    const ConfirmPassword1 = "Peacejoy*1";
    const Month = "January";
    const Day = "2";
    const Year = "2015";
    const Username = "Israel";

    RegistrationPage.getLogo().click();
    RegistrationPage.getSignUp().click();
    RegistrationPage.getParent().click();
    RegistrationPage.getSignUpWithEmail().click();
    RegistrationPage.getFillEmail().type(Email);
    RegistrationPage.getFillFirstName().type(firstName);
    RegistrationPage.getFillLastName().type(lastName);
    RegistrationPage.getSelectCountry().select(Country);
    RegistrationPage.getFillPhoneNumber().type(PhoneNumber);
    RegistrationPage.getFillPassword().type(Password);
    RegistrationPage.getFillConfirmPassword().type(ConfirmPassword);
    RegistrationPage.getSubmit().click();
    RegistrationPage.getLearner().click();
    RegistrationPage.getFillMonth().select(Month);
    RegistrationPage.getFillDay().select(Day);
    RegistrationPage.getFillYear().select(Year);
    RegistrationPage.getNextDOB().click();
    RegistrationPage.getFillParentEmail().type(Email);
    RegistrationPage.getNextParent().click();
    RegistrationPage.getFillUserName().type(Username);
    RegistrationPage.getNextUsername().click();
    RegistrationPage.getFillPassword1().type(Password1);
    RegistrationPage.getFillConfirmPassword1().type(ConfirmPassword1);
    RegistrationPage.getCreateAccount().click();
    RegistrationPage.getAssertion();
    RegistrationPage.getUrl();
    RegistrationPage.getSignUpAssertion();
  });
});
