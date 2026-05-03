import { Given, Then, When } from "@wdio/cucumber-framework";
import AccountPage from "../pageobjects/account.page.js";
import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";
import SignupPage from "../pageobjects/signup.page.js";

let name: string;

Given(/^I am on the homepage$/, async () => {
  await HomePage.open();
});

Then(/^I should see the home page$/, async () => {
  await expect(browser).toHaveUrl(
    expect.stringContaining("automationexercise.com"),
  );
  await expect(browser).toHaveTitle(
    expect.stringContaining("Automation Exercise"),
  );
  await expect(HomePage.slider).toBeDisplayed();
});

When(/^I click on "Signup \/ Login" button$/, async () => {
  await HomePage.signupLoginLink.click();
});

Then(/^I should see "New User Signup!" text$/, async () => {
  await SignupPage.expectNewUserSignup();
});

Then(/^I should see "Enter Account Information" text$/, async () => {
  await SignupPage.expectAccountInformation();
});

Then(/^I should see "Account Created!" text$/, async () => {
  await AccountPage.expectAccountCreated();
});

When(/^I enter name and email address$/, async () => {
  const timestamp = Date.now();
  name = `TestUser${timestamp}`;
  const email = `testuser${timestamp}@example.com`;

  console.log(`email:${email}`);

  await LoginPage.fillSignupFields(name, email);
});

When(/^I click "Signup" button$/, async () => {
  await LoginPage.signupButton.click();
});

When(/^I fill in account information details$/, async () => {
  await SignupPage.fillAccountInformationDetails({
    title: "Mr.",
    password: "TestPassword123!",
    dateOfBirth: { day: "1", month: "1", year: "1970" },
  });
});

When(/^I select Sign up for our newsletter! checkbox$/, async () => {
  await SignupPage.newsletterCheckbox.click();
});

When(
  /^I select Receive special offers from our partners! checkbox$/,
  async () => {
    await SignupPage.specialOffersCheckbox.click();
  },
);

When(/^I fill in address information details$/, async () => {
  await SignupPage.fillAddressInformationDetails({
    firstName: "John",
    lastName: "Doe",
    company: "Test Company",
    address: "Test Street 123",
    address2: "Address 2",
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90001",
    mobileNumber: "1234567890",
  });
});

When(/^I click "Create Account" button$/, async () => {
  await SignupPage.createAccountButton.click();
});

When(/^I click "Continue" button$/, async () => {
  await AccountPage.continueButton.click();
});

When(/^I should see "Logged in as" username$/, async () => {
  await HomePage.expectLoggedIn(name);
});

When(/^I click "Delete Account" button$/, async () => {
  await HomePage.deleteAccountLink.click();
});

Then(/^I should see "Account Deleted!" text$/, async () => {
  await AccountPage.expectAccountDeleted();
});

When(/^$/, async () => {
  //
});
