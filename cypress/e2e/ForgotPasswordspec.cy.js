///<reference types="cypress"/>
import { ForgotPasswordPage } from "../Pages/ForgotPasswordPageObject";

describe("Forgot Password Test", () => {
  const user = Cypress.env("users").ValidUser;

  (beforeEach(() => {
    cy.visit("https://test.yung.doyenify.com");
  }),
    it("Forgot Password Verification", () => {
      const Email = "Joy12@gmail.com";
      // const Email = "beeneing1944@armyspy.com";
      const Password = "Joy12345";
      const incorrectEmail = "Peace12@.com";
      const incorrectPassword = "joy12";
      const warningText =
        "Must be at least 8 characters, have a number, and a capital letter";
      const requiredText1 = "Email/Username is required";
      const requiredText2 = "Password is required";

      ForgotPasswordPage.getClickLogin().click({ force: true });
      ForgotPasswordPage.getFillEmail().type(Email);
      ForgotPasswordPage.getFillIncorrectPassword().type(incorrectPassword);
      ForgotPasswordPage.getUrl();
      ForgotPasswordPage.getLocation();
      ForgotPasswordPage.getForgotPassword().click({ force: true });
      ForgotPasswordPage.getFillEmailForForgotPassword().type(Email);
      ForgotPasswordPage.getFillEmailForParent().type(Email);
      ForgotPasswordPage.getAssertionForParent();
      ForgotPasswordPage.getContinueButton().click();
      ForgotPasswordPage.getSubmitButton();
      ForgotPasswordPage.getAssertionForLinkSent();
      ForgotPasswordPage.getSuccessMessage();
      ForgotPasswordPage.getLocationForForgotPassword();
    }));
});
