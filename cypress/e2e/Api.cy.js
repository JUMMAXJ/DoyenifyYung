///<reference types = 'cypress'/>
describe('Api Testing ', () => {
    it('login execution by Session', () => {
        cy.loginBySession("username", "password");
        cy.visit('https://test.yung.doyenify.com');
    })

    it.skip('login Programmatically',()=>{
        cy.loginByApi("Joy12@gmail.com", "Joy12345");
        cy.visit('https://test.yung.doyenify.com');
    })
})