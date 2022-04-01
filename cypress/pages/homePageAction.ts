import { CommonAction } from "./commonAction";
import { dirname } from "path";
function getRandomInt(max) {
 return Math.floor(Math.random() * max);
}

function formatString(text) {
 return text
  .replace("kr", "")
  .replace("\u00A0", "")
  .replace("\n", "")
  .trim();
}
export class HomePageAction extends CommonAction {
 goRegisterPage() {
  cy.log("Go to home page").visit("https://demo.guru99.com/");
  return this;
 }

 inputEmailRegister() {
  cy
   .get('input[name="emailid"]')
   .type(`test${Math.random()}@gmail.com`);
  return this;
 }
 clickSubmitRegister() {
  cy.get('input[name="btnLogin"]').click();
  return this;
 }
 isRegisterSuccess() {
  cy
   .xpath(
    '//tr/td[@class="accpage" and text()="User ID :"]//following-sibling::td'
   )
   .invoke("text")
   .then((text1) => {
    cy
     .xpath(
      '//tr/td[@class="accpage" and text()="Password :"]//following-sibling::td'
     )
     .invoke("text")
     .then((text2) => {
      cy.writeFile("cypress/fixtures/data.json", {
       username: formatString(text1),
       password: formatString(text2),
      });
     });
   });

  return this;
 }

 //! login page
 goLoginPage() {
  cy.log("Go to home page").visit("https://demo.guru99.com/v4");
  return this;
 }
 inputBlankLogin() {
  cy.get('input[name="uid"]').type("");
  cy.get('input[name="password"]').type("");
  cy.contains("label", "User-ID must not be blank");
  cy.contains("label", "Password must not be blank");
  return this;
 }
 inputLoginInvalid() {
  cy.get('input[name="uid"]').type("mngr389933");
  cy.get('input[name="password"]').type("Uhapyby");
  return this;
 }

 inputLoginValid() {
  cy
   .readFile("cypress/fixtures/data.json")
   .its("username")
   .then((usrname) => {
    cy.get('input[name="uid"]').type(usrname);
   });
  cy
   .readFile("cypress/fixtures/data.json")
   .its("password")
   .then((password) => {
    cy.get('input[name="password"]').type(password);
   });
  return this;
 }
 clickLogin() {
  cy.get('input[name="btnLogin"]').click();
  return this;
 }
 clickReset() {
  cy.get('input[name="uid"]').type("mngr389933");
  cy.get('input[name="password"]').type("Uhapyby");
  cy.get('input[name="btnReset"]').click();
  cy.get('input[name="uid"]').should("be.empty");
  cy.get('input[name="password"]').should("be.empty");
  return this;
 }
 loginSuccess() {
  cy.url().should("include", "/Managerhomepage.php");
 }
 showAlerLoginFailed() {
  cy.on("window:alert", (text) => {
   expect(text).to.contains("User or Password is not valid");
  });

  return this;
 }
}
