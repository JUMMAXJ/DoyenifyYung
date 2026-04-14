/// <reference types = "cypress" />
import { LogoutPage}  from "../Pages/LogoutPageObject.js";

describe('Logout Test', () => {
    const user = Cypress.env("users").ValidUser;

    const email = "beeneing1944@armyspy.com";
    const password = "Joy12345";

    beforeEach(() => {
       cy.login(email, password);
        

    })

    

    it('User should logout successfully', () => {
        
        LogoutPage.getClickList().click({multiple:true});
        LogoutPage.getClickLogout().click({force:true});
        LogoutPage.getSvgAssertion()
        LogoutPage.getUrl();

    });
});