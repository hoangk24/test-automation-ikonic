export class CommonAction {
 visitPage() {
  cy.visit("/");
  return this;
 }

 wait(time: number) {
  cy.wait(time);
  return this;
 }

 isUrlContain(value: string) {
  cy.url().should("contain", value);
  return this;
 }

 isTextDisplayed(text: string) {
  cy.contains(text).should("be.visible");
  return this;
 }

 inputTextField(css: string, text: string) {
  cy.get(css).should("exist").clear().type(text);
  return this;
 }

 clickElement(css: string, isForce: boolean = false) {
  cy.get(css).should("exist").click({ force: isForce });
  return this;
 }

 clickElementByIndex(
  css: string,
  index: number,
  isForce: boolean = false
 ) {
  cy.get(css).eq(index).should("exist").click({ force: isForce });
  return this;
 }

 clickElementOnText(
  css: string,
  text: string,
  isForce: boolean = false
 ) {
  cy.get(css).contains(text).should("exist").click({ force: true });
  return this;
 }
 inputByXpath(xpath: string, text: string) {
  cy.xpath(xpath).type(text);
  return this;
 }
 clickByXpath(xpath: string) {
  cy.xpath(xpath).click();
  return this;
 }
}
