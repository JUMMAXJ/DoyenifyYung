///<reference types ='cypress'/>
describe("To login as a registered user on Doyenify Academy YungDoyens", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  before(() => {
    cy.log("This test hook will run once");
  });
  after(() => {
    cy.log(
      "This test hook will run after all the test cases have been executed",
    );
  });
  afterEach(() => {
    cy.log("This test hook will run after each test case has been executed");
  });
  const Email = "Joy12@gmail.com";
  //const Email = "beeneing1944@armyspy.com";
  const Password = "Joy12345";
  const incorrectEmail = "Peace12@.com";
  const incorrectPassword = "joy12";
  const warningText =
    "Must be at least 8 characters, have a number, and a capital letter";
  const requiredText1 = "Email/Username is required";
  const requiredText2 = "Password is required";

  it("To login as a registered user on YungDoyens with forgot password credentials", () => {
    cy.visit("https://test.yung.doyenify.com");
    cy.contains("Login").click();
    cy.get("#Email").type(Email);
    cy.get("#Password").type(incorrectPassword);
    cy.url().should("contain", "https://test.yung.doyenify.com");
    cy.location("pathname").should("eq", "/login");
    //cy.get('[type="submit"]').click()
    //cy.get(".validation-error-message").should("contain", warningText);
    //cy.get('.text-\[\#fe5a1d\]').click();
    cy.contains(/forgot your password/i).click({force:true});
    cy.get('.mb-3 > .w-full').type(Email);
    cy.get('#gemail').type(Email);
    cy.get("#gemail").should("have.value", "Parent");
    cy.contains("button", "Continue").click();
    cy.get('button[type="submit"]').click();
    cy.contains("A link has been sent to your email. Use the link to reset your password").should("be.visible");
    cy.location('pathname').should("eq", "/ForgotPassword");
    
  });
});
