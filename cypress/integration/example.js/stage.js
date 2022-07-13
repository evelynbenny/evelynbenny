/// <reference types="cypress" />

import LoginPage from "../pageObject/loginPage.js";

describe("stage.blendedsense Test", () => {
  it("Login with valid credentials", function () {
    const login = new LoginPage();
    login.navigate();
    login.enterEmail("nagendra.n@imaginnovate.com");
    login.enterPassword("test1234");
    login.submit();
    cy.url().should("be.equal", "https://stage.blendedsense.com/login");
  });

it("blended sense, Dashboard Mock", () => {

  cy.wait(10000);
  cy.get('[class="v-list-item__content"]').contains("Dashboard").click();
});

it("blended sense, Businesses Mock", () => {

  cy.wait(10000);
  cy.get('[class="v-list-item__title"]').contains("Businesses").click();
});

it("blended sense, Content sweeps Mock", () => {
  
 
  cy.wait(15000);
  cy.get('[class="v-list-item__title"]').contains("Content sweeps").click({force:true});
});
});