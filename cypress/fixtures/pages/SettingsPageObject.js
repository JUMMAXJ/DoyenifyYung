export const settingsPage = {
   
    getClickIcon(){
      return cy.get('svg');
    },

    getClickSettings(){
        return  cy.get('[href="/settings"]');
    },

    getClickProfile(){
        return cy.get(':nth-child(1) > div > h2');
    },

    getClickPaymentHistory(){
        return cy.get(':nth-child(1) > div > h2');
    },

    getClickYourSummerStudents(){
        return cy.get('.md\\:col-span-3 > div > h2');
    },

    getWaitForLoadPage(){
        return cy.wait(5000)
    },

    getUrl(){
        return cy.url().should("contain", "https://test.yung.doyenify.com");
    },

    getUrlSettings(){
        return cy.url().should("contain", "https://test.yung.doyenify.com/settings");
    },
    
    getAssertionIcon(){
        return cy.get('div svg').first().should('exist')
    },

    getAssertionSettingsLink(){
        return cy.get('a[href="/settings"]').should('have.attr', 'href', '/settings');
    },

    getAssertionProfile(){
        return cy.contains('h2','Profile').should('be.visible');
    },

    getAssertionPaymentHistory(){
        return  cy.contains('h2','Payment History').should('be.visible');
    },

    getAssertionYourSummerStudents(){
        return cy.contains('h2','Your Summer Students').should('be.visible');
    },


}