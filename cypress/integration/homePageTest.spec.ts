import { HomePageAction } from "../pages/homePageAction";

describe("Home page", () => {
 const homePage = new HomePageAction();
 it("test register", () => {
  homePage
   .goRegisterPage()

   .goRegisterPage()
   .inputEmailRegister()
   .clickSubmitRegister()
   .isRegisterSuccess();
 });

 it("test login", () => {
  homePage
   .goLoginPage()
   .clickReset()
   .inputLoginInvalid()
   .showAlerLoginFailed()
   .inputLoginValid()
   .clickLogin()
   .loginSuccess();
 });
});
