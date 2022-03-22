import { CommonAction } from "./commonAction";
function getRandomInt(max) {
 return Math.floor(Math.random() * max);
}
export class HomePageAction extends CommonAction {
 gotoHomePage() {
  cy
   .log("Go to home page")
   .visit("https://ikonic.client.fullstackdev.info");
  cy.viewport(1500, 660);

  return this;
 }
 showPopup() {
  cy.log("show popup when click button");
  cy.get(".modal-dialog").should("be.visible");
  return this;
 }

 isInvalidAll() {
  cy.get('[name="user_name"]').type("test");
  cy.get('[name="email"]').type("test");
  cy.get('[name="password"]').type("test");
  cy.xpath('(.//div[text()="Sign Up"])[3]').click();
  cy.get(".Mui-error").should("have.length", 3);
  return this;
 }

 isValidAll() {
  cy.get('[name="user_name"]').type(`test${getRandomInt(20000)}`);
  cy.get('[name="email"]').type(`test${Math.random()}@gmail.com`);
  cy.get('[name="password"]').type("Hoang123222@");
  cy.xpath('(.//div[text()="Sign Up"])[3]').click();
  return this;
 }
 isPopupRegisterSucessShow() {
  cy.get(".modal-content").should("be.visible");
  cy.xpath('(.//div[text()="OK"])').click();
  return this;
 }
 inputLoginInValidAccount() {
  cy
   .get(
    ".jss6 > :nth-child(1) > .MuiPaper-root > .MuiInputBase-root > .MuiInputBase-input"
   )
   .type("toants.301@gmail.com2");

  cy
   .get(
    ".jss6 > :nth-child(2) > .MuiPaper-root > .MuiInputBase-root > .MuiInputBase-input"
   )
   .type("Abcd123!@2");
  cy.get(".jss12 > .jss1008 > .jss1009 > .jss1020").click();

  return this;
 }
 inputLoginValidAccount() {
  cy
   .get(
    ".jss6 > :nth-child(1) > .MuiPaper-root > .MuiInputBase-root > .MuiInputBase-input"
   )
   .type("toants.301@gmail.com");

  cy
   .get(
    ".jss6 > :nth-child(2) > .MuiPaper-root > .MuiInputBase-root > .MuiInputBase-input"
   )
   .type("Abcd123!@");
  cy.get(".jss12 > .jss1008 > .jss1009 > .jss1020").click();
  cy.url().should("eq", "https://ikonic.client.fullstackdev.info/");
  return this;
 }
 isMessageShowing() {
  cy.get(".rnc__notification-content").should("be.visible");
  return this;
 }

 clearInputLogin() {
  cy
   .get(
    ".jss6 > :nth-child(1) > .MuiPaper-root > .MuiInputBase-root > .MuiInputBase-input"
   )
   .clear();

  cy
   .get(
    ".jss6 > :nth-child(2) > .MuiPaper-root > .MuiInputBase-root > .MuiInputBase-input"
   )
   .clear();
  return this;
 }

 uploadAvatar() {
  cy.get(".jss250 > .jss1011 > .jss1009 > .jss1020").click();
  cy.wait(200);
  cy.xpath(`//input[@id="avatar"]`);
  cy.fixture("anh-gai-xinh-1.jpg").then((fileContent) => {
   cy.xpath(`//input[@id="avatar"]`).attachFile({
    fileContent: fileContent.toString(),
    fileName: "anh-gai-xinh-1.jpg",
    mimeType: "image/png",
   });
  });
  cy.get(":nth-child(2) > .jss1008 > .jss1009 > .jss1020").click();
 }
}
