///<reference types ='cypress'/>
describe("To login as a registered user on Doyenify Academy YungDoyens", () => {
  beforeEach(() => {
    cy.visit("https://test.yung.doyenify.com");
  });
  before(() => {
    cy.log("This test hook will run once");
  });

  after(() => {
    cy.log("This test hook run after all test cases have been executed");
  });

  afterEach(() => {
    cy.log("This test hook run after each test case has been executed");
  });

  const Email = "Joy12@gmail.com";
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

  it("To login as a registered user on YungDoyens with valid credentials and add a child", () => {
    cy.contains("Login").click();
    cy.get("#Email").type(Email);
    cy.get("#Password").type(Password);
    cy.get('[type="submit"]').click();
    //cy.get('.validation-error-message').should('contain','Must be at least 8 characters, have a number, and a capital letter')
    cy.url().should("contain", "https://test.yung.doyenify.com");
    cy.url().should("contain", "https://test.yung.doyenify.com/dashboard");
    cy.get('.font-semibold').should('contain','Good day, Joy');
    cy.contains("Add a new child").click({ force: true });
    cy.get('.text-xl').should('contain','Add Child');
    cy.get("#No").click();
    cy.get(".bg-gray-500").click();
    cy.get(":nth-child(1) > .px-3").select("January");
    cy.get(":nth-child(2) > .px-3").select("1");
    cy.get(":nth-child(3) > .px-3").select("2015");
    //cy.get(':nth-child(3) > .px-3').select("2015");
    cy.get(".bg-gray-500").click();
    cy.get("#gemail").type(ChildUsername);
    cy.get('[placeholder="Password"]').type(ChildPassword);
    cy.get("#terms").click();
    cy.get(".bg-gray-500").click();
    cy.get('[alt="edit"]').click({ force: true });
    cy.get('input[Placeholder="Good"]').clear().type(user);
    cy.get('input[Placeholder="Soul"]').clear().type(lastName);
    cy.get('input[Placeholder="57750234"]').clear().type(number);
    cy.contains("Save Changes").click({ force: true });
    cy.contains("Enroll").click({ force: true });
    cy.contains("Python Programming Basics").parent().click({ force: true });
    //cy.location("pathname").should("contain","/courseDetails/");
    cy.contains("Back").click({ force: true });
    cy.contains("Python Programming Basics").parent().click({ force: true });
    cy.get(".mt-7 > .rounded-full").click({ force: true });
    //cy.contains('Proceed to payment').click();
    cy.wait(2000);
    cy.contains("Pay Now").parent().click({ force: true });
    cy.get(":nth-child(4) > .gap-4 > .flex > .text-xs").should("contain","Yearly Plan");
    cy.get(":nth-child(4) > .w-full").click();
    /*cy.location("pathname").should("eq","//checkout.stripe.com/");
    cy.url().should('include', 'checkout.stripe.com');
    cy.get('input#email').type(Email);
    cy.get('input#cardNumber').type("4242424242424242");
    cy.get('input#cardExpiry').type("1230");
    cy.get('input#cardCvc').type("123");
    cy.get('input#billingName').type(`${user} ${lastName}`);
    cy.get('input#billingCountry').type("Estonia");
    cy.get('input#enableStripePass').click();
    //cy.contains('pathname').should('eq','https://test.yung.doyenify.com/courseAvailable');
    //cy.url().should("contain","https://test.yung.doyenify.com/plans/family");
    //cy.get(':nth-child(4) > .w-full').click();
    //cy.get('input#goodsoul12.accent-\[\#FE5A1D\]').click();
    //cy.get("input#goodsoul12.accent-\\[\\#FE5A1D\\]").click();
    //cy.get('ijput#goodsoul12.accent-\[\#FE5A1D\]').should('be.checked');
    //cy.contains('Proceed Payment').click({force:true});*/
  });
});
