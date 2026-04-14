///<reference types ='cypress'/>

describe('Stripe Checkout API Intercept', () => {
  it('Intercepts and asserts create-checkout-session API', () => {
     // Step 1: Visit your app
     cy.visit('https://checkout.stripe.com/'); // replace with your dev/local/staging URL

     // Step 2: Intercept the session creation request
     cy.intercept('POST', '/api/create-checkout-session').as('createCheckoutSession');
     cy.wait('@createCheckoutSession', { timeout: 10000 }) // 10 seconds
      .its('response.statusCode')
      .should('eq', 200);



     // Step 3: Click the checkout button
     cy.contains('Start now') .click();

    
    });
});
