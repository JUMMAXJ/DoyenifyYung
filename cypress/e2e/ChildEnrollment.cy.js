///<reference types="cypress" />

describe("Enrollment on a course for the User Goodsoul112", () => {

  const username = "Goodsoul112";   
  const password = "Gloory1*";           
  const promoCode = "1234567";
  const email = "beeneing1944@armyspy.com";    

  const cardNumber = "4242424242424242";
  const cardExpiry = "1230";
  const cardCvc = "123";
  const billingName = "Good Soul";
  const billingCountry = "Estonia";

  beforeEach(() => {
    cy.visit("https://test.yung.doyenify.com/");
  });

  it("To enroll a child Goodsoul112 into a course", () => {

    // LOGIN
    cy.contains("Login").click({ force: true });
    cy.get("#Email").type(username);
    cy.get("#Password").type(password);
    cy.get('[type="submit"]').click();
    //cy.contains('button', 'Enroll Goodsoul112').click();
    cy.contains('Welcome to Doyen Dashboard', { timeout: 15000 }).should('be.visible');
    cy.url().should('eq','https://test.yung.doyenify.com/yungdoyen')
    cy.wait(4000);
    cy.contains('Button','Enroll').click({force:true});
    cy.contains('JavaScript Programming for Young Programmers', { timeout: 20000 }).should('exist').click();
    cy.contains("Start Learning").click({force:true});
    //cy.url().should("include", "/plans/family");
    cy.url().should("include", "https://test.yung.doyenify.com/plans/individual");
    cy.contains("Yearly Plan").should("be.visible");
    //cy.get(':nth-child(4) > .w-full').click();
    cy.contains("Pay Now").click({force:true});
    // PAYMENT DETAILS PAGE
    //cy.get("#glory").click();
    cy.contains("Proceed to payment").click({force:true});
    cy.contains("Pay with Stripe").click({force:true});
    //cy.contains("Click to generate payment link").click({force:true});
    // MOCK REDIRECT
    cy.intercept("POST", "/api/create-checkout-session").as("createSession");
    cy.window().then((win) => {
      cy.stub(win.location, "assign").as("redirectStub");
    });

    cy.get("button.checkout").click();
    cy.wait("@createSession").its("response.statusCode").should("eq", 200);
    cy.get("@redirectStub").should("have.been.called");

    // STRIPE FORM
    cy.get("input#email").type(email);
    cy.get("input#cardNumber").type(cardNumber);
    cy.get("input#cardExpiry").type(cardExpiry);
    cy.get("input#cardCvc").type(cardCvc);
    cy.get("input#billingName").type(billingName);
    cy.get("input#billingCountry").type(billingCountry);
    cy.get("input#enableStripePass").click();
    cy.contains('button', 'Submit').click();
    //cy.get('button[type="submit"]').click();
    //cy.contains("Pay").click();
 


    


  


  


   


    
    // VERIFY COURSE DETAILS
   // cy.contains("Eligibility").next().should("contain.text", "Age 5 - 10");
    //cy.contains("Program Delivery").next().should("contain.text", "Online");
    //cy.contains("Duration").next().should("contain.text", "32 weeks");

    // START LEARNING
    //cy.contains("Start Learning").click({ force: true });

    // VERIFY PLAN PAGE
    cy.url().should("include", "/plans/family");
    cy.contains("Yearly Plan").should("be.visible");
    cy.get(':nth-child(4) > .w-full').click();
    cy.contains("Pay Now").click({ multiple: true });

    // PAYMENT PAGE
    cy.get("#glory").click();
    cy.contains("Proceed to payment").click({ force: true });

    // APPLY PROMO CODE
    cy.get('[placeholder="Promo Code"]').type(promoCode);
    cy.contains("Apply").click({ force: true });

    
  });
    

    

    
});
