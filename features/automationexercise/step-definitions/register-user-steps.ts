import { Given, When } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page.js";
import RegistrationPage from "../pageobjects/registration.page.js";
import SignupPage from "../pageobjects/signup.page.js";

Given(/^I am on the homepage$/, async () => {
  await HomePage.open();
});

When(/^I click on Signup\/Login button$/, async () => {
  await HomePage.singupLoginLink.click();
});

When(/^I enter name and email address$/, async () => {
  const timestamp = Date.now();
  const name = `TestUser${timestamp}`;
  const email = `testuser${timestamp}@example.com`;

  await SignupPage.signup(name, email);
});

When(/^I enter name and existing email address$/, async () => {
  await SignupPage.signup("Existing User", "existing@example.com");
});

When(/^I click Signup button$/, async () => {
  await SignupPage.btnSignup.click();
});

When(/^I should see "([^"]*)" text$/, async (text: string) => {
  const heading = await $(`//*[contains(text(), "${text}")]`);
  await expect(heading).toBeDisplayed();
});

When(/^I fill in account details$/, async () => {
  await RegistrationPage.fillAccountDetails({
    password: "TestPassword123!",
    firstName: "John",
    lastName: "Doe",
    company: "Test Company",
    address: "123 Test Street",
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90001",
    mobileNumber: "1234567890",
  });
});

When(/^I fill in address information$/, async () => {
  // Address information is already filled in fillAccountDetails
  // This step is for clarity in the feature file
});

When(/^I click Create Account button$/, async () => {
  await RegistrationPage.btnCreateAccount.click();
});

When(/^I should see "([^"]*)" error message$/, async (message: string) => {
  await expect(SignupPage.errorMessage).toHaveText(
    expect.stringContaining(message),
  );
});

When(/^I click Continue button$/, async () => {
  await RegistrationPage.btnContinue.click();
});

When(/^I should see "([^"]*)" username$/, async (text: string) => {
  const loggedInText = await $(`//*[contains(text(), "${text}")]`);
  await expect(loggedInText).toBeDisplayed();
});

When(/^I click Delete Account button$/, async () => {
  await HomePage.deleteAccountLink.click();
});

When(/^$/, async () => {
  //
});
