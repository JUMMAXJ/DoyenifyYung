///<reference types ='cypress'/>
describe("To login as a registered user on Doyenify Academy YungDoyens", () => {
  beforeEach(() => {

      cy.visit("/"); 
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

  const Email = "beeneing1944@armyspy.com";
  const Password = "Joy12345";
  

  it("To login as a registered user on YungDoyens with valid credentials and add a child", () => {
    cy.contains("Login").click();
    cy.get("#Email").type(Email);
    cy.get("#Password").type(Password);
    cy.get('[type="submit"]').click();
    //cy.get('.block').click({force:true});
    cy.get('svg').click({multiple:true});
    cy.get('[href="/settings"]').click({force:true});
    cy.get(':nth-child(1) > div > h2').click();
    cy.get(':nth-child(5) > .underline').click();
    cy.get('.z-40 > :nth-child(1) > .w-full').click();
    cy.get(':nth-child(2) > .w-full').click();
    cy.get('.z-40 > :nth-child(3) > .w-full').click();
    cy.get('.rounded-3xl').click();
    cy.get('h2').contains('Profile').should('exist');
    cy.get('.md\\:col-span-2 > div > h2').click();
    cy.get('h2').contains('Payment History').should('exist');
    //cy.get('.md\\:col-span-3 > div > h2').click();
    cy.get(':nth-child(2) > div > h2').click({multiple:true});
    cy.get('h2').contains('Your Summer Students').should('exist');
    cy.get(':nth-child(3) > div > h2').click();
    cy.wait(5000);
    //cy.get(':nth-child(1) > :nth-child(4) > [style="display: flex; justify-content: center; margin-bottom: 2%;"] > div').click({multiple:true});
    //Assertions
    cy.url().should("contain", "https://test.yung.doyenify.com");
    cy.url().should("contain", "https://test.yung.doyenify.com/settings");
    cy.get('div svg').first().should('exist');
    cy.get('a[href="/settings"]').should('have.attr', 'href', '/settings');
    cy.contains('h2','Profile').should('be.visible');
    cy.contains('h2','Payment History').should('be.visible');
    cy.contains('h2','Your Summer Students').should('be.visible');
    //cy.contains('th','FIRST NAME').should('exist');
    //cy.contains('th','LAST NAME').should('exist');

    
    
    
    
  });
});
