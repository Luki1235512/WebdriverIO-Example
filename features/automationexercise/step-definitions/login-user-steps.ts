import { Then, When } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import SignupPage from "../pageobjects/signup.page.js";
import { testContext } from "./test-context.js";

Then(/^I should see "Login to your account" text$/, async () => {
  await SignupPage.expectLoginToYourAccount();
});

When(/^I enter correct email address and password$/, async () => {
  await LoginPage.fillLoginFields(testContext.email, testContext.password);
});

When(/^I click "login" button$/, async () => {
  await LoginPage.loginButton.click();
});
