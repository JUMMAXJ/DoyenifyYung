///<reference types = "cypress"/>
export {ValidUserLoginPage, InvalidUserLoginPage1, InvalidUserLoginPage2, EmptyFieldLoginPage };

class ValidUserLoginPage{
 getClickLogin() {
      return cy.contains('Login');
   }

 getFillEmail(){
     return cy.get('#Email');
   }

 getFillPassword(){
      return cy.get('#Password');
   }
 
 getSubmit(){
     return cy.get('[type="submit"]');
    }

 getUrl(){
     return cy.url().should('contain','https://test.yung.doyenify.com');
   }

 getLocation(){
      return  cy.location('pathname').should('eq','/login');
   }

}
 
class InvalidUserLoginPage1{
    getClickLogin(){
        return cy.contains('Login');
    }
   
    getFillEmail(){
        return cy.get('#Email');
    }
   
    getFillPassword(){
      return cy.get('#Password');
    }
    
    getSubmit(){
        return cy.get('[type="submit"]');
    }

    verifyErrorMessage(warningText){
     cy.get('.validation-error-message').should('contain',warningText);
    }

   
    getUrl(){
      return cy.url().should('contain','https://test.yung.doyenify.com');
    }
   
    getLocation(){
         return  cy.location('pathname').should('eq','/login');
    }
}

class InvalidUserLoginPage2 {
    getClickLogin(){
        return cy.contains('Login');
    }
   
    getFillEmail(){
        return cy.get('#Email');
    }
   
    getFillPassword(){
      return cy.get('#Password');
    }
    
    getSubmit(){
        return cy.get('[type="submit"]');
    }

    getUrl(){
      return cy.url().should('contain','https://test.yung.doyenify.com');
    }
   
    getLocation(){
         return  cy.location('pathname').should('eq','/login');
    }

}

 class EmptyFieldLoginPage {
    getClickLogin(){
        return cy.contains('Login');
    }
    
    getSubmit(){
        return cy.get('[type="submit"]');
    }

   
    getUrl(){
      return cy.url().should('contain','https://test.yung.doyenify.com');
    }
   
    getLocation(){
      return  cy.location('pathname').should('eq','/login');
    }

    getErrorMessage1(requiredText1){
       return cy.get('.flex > :nth-child(1) > div > .validation-error-message').should('contain',requiredText1);
    }

   getErrorMessage2(requiredText2){
      return cy.get('.relative.w-full > .mb-3 > [style="width: 400px;"] > .validation-error-message').should('contain',requiredText2);
    }



}