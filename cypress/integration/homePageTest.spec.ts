import { HomePageAction } from "../pages/homePageAction";

describe("Home page", () => {
 const homePage = new HomePageAction();
 it("test register", () => {
  homePage
   .gotoHomePage()
   .clickElementByIndex(".jss1020", 1)
   .showPopup()
   .isInvalidAll()
   .isValidAll()
   .isPopupRegisterSucessShow();
 });

 it("test login", () => {
  homePage
   .gotoHomePage()
   .clickElement(":nth-child(1) > .jss1008 > .jss1009 > .jss1020")
   .showPopup()
   .inputLoginInValidAccount()
   .isMessageShowing()
   .wait(5000)
   .clearInputLogin()
   .inputLoginValidAccount();
 });
 it("test profile", () => {
  homePage
   .clickElement(
    '[style="margin-left: 1rem;"] > .jss1009 > .jss1020 > .tw-flex > div'
   )
   .showPopup()
   .uploadAvatar();
 });
});
