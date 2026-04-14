/// <reference types="cypress" />

import loginData from "../fixtures/loginData.json";

describe("To explain loading of fixture file", () => {
  beforeEach(() => {
    cy.visit("https://test.yung.doyenify.com/");
    cy.fixture("loginData.json").as("users");
  });

  it("login by using valid credentials", () => {
    cy.visit("https://test.yung.doyenify.com/");
    cy.fixture("loginData.json").then((data) => {
      cy.log("Data in fixture", data);
      cy.contains("Login").click();
      cy.get("#Email").type(data[(0, 1, 2)].email);
      cy.get("#Password").type(data[(0, 1, 2)].password);
      cy.url().should("contain", "https://test.yung.doyenify.com/");
      cy.location('pathname').should("eq", "/login")    
    
    });
  });

  it("login", function () {
    this.users.forEach((user) => {
      cy.visit("https://test.yung.doyenify.com/");
      cy.contains("Login").click();
      cy.get("#Email").type(user.email);
      cy.get("#Password").type(user.password);
      cy.get('button[type="submit"]').click();
      cy.url().should("contain", "https://test.yung.doyenify.com/"); 
      cy.location('pathname').should("eq", "/login")   
      //cy.url().should("eq", "https://test.yung.doyenify.com/login");
      
    });
  });
});
