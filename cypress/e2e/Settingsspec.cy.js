///<reference types ='cypress'/>
import { settingsPage } from "../Pages/SettingsPageObject.js";
describe("Settings Test", () => {
  const user = Cypress.env("users").ValidUser;
  const email = "beeneing1944@armyspy.com";
  const password = "Joy12345";
   
  beforeEach(() => {
    cy.login(email,password);
  });

  it("To view the settings page", () => {
    

  
    settingsPage.getClickIcon().click({ multiple: true });
    settingsPage.getClickSettings().click({ force: true });
    settingsPage.getClickProfile().click();
    settingsPage.getClickPaymentHistory().click();
    settingsPage.getClickYourSummerStudents().click();
    settingsPage.getWaitForLoadPage();
    settingsPage.getUrl();
    settingsPage.getUrlSettings();
    settingsPage.getAssertionIcon();
    settingsPage.getAssertionSettingsLink();
    settingsPage.getAssertionProfile();
    settingsPage.getAssertionPaymentHistory();
    settingsPage.getAssertionYourSummerStudents();
  });
});
