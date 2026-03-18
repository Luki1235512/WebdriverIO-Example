import { Given, Then, When } from "@wdio/cucumber-framework";
import AccountPage from "../pageobjects/account.page.js";
import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";
import SingupPage from "../pageobjects/signup.page.js";

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
  await HomePage.singupLoginLink.click();
});

Then(/^I should see "New User Signup!" text$/, async () => {
  const heading = $(
    `//div[@class="signup-form"]/h2[1][. = "New User Signup!"]`,
  );
  await heading.waitForDisplayed();
  await expect(heading).toBeDisplayed();
});

Then(/^I should see "Enter Account Information" text$/, async () => {
  const heading = $(
    `//h2[@class="title text-center"]/b[1][. = "Enter Account Information"]`,
  );
  await heading.waitForDisplayed();
  await expect(heading).toBeDisplayed();
});

Then(/^I should see "Account Created!" text$/, async () => {
  const heading = $(
    `//h2[@data-qa="account-created"]//b[. = "Account Created!"]`,
  );
  await heading.waitForDisplayed();
  await expect(heading).toBeDisplayed();
});

When(/^I enter name and email address$/, async () => {
  const timestamp = Date.now();
  const name = `TestUser${timestamp}`;
  const email = `testuser${timestamp}@example.com`;

  await LoginPage.fillSignupFields(name, email);
});

When(/^I click "Signup" button$/, async () => {
  await LoginPage.signupButton.click();
});

When(/^I fill in account information details$/, async () => {
  await SingupPage.fillAccountInformationDetails({
    title: "Mr.",
    password: "TestPassword123!",
    dateOfBirth: { day: "1", month: "1", year: "1970" },
  });
});

When(/^I select Sign up for our newsletter! checkbox$/, async () => {
  await SingupPage.newsletterCheckbox.click();
});

When(
  /^I select Receive special offers from our partners! checkbox$/,
  async () => {
    await SingupPage.specialOffersCheckbox.click();
  },
);

When(/^I fill in address information details$/, async () => {
  await SingupPage.fillAddressInformationDetails({
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
  await SingupPage.createAccountButton.click();
});

When(/^I click "Continue" button$/, async () => {
  await AccountPage.continueButton.click();
});

When(/^I should see "Logged in as" username$/, async () => {
  const heading = $(
    `//a[i[@class="fa fa-user"] and contains(., "Logged in as")]`,
  );
  await heading.waitForDisplayed();
  await expect(heading).toBeDisplayed();
});

When(/^I click "Delete Account" button$/, async () => {
  await HomePage.deleteAccountLink.click();
});

Then(/^I should see "Account Deleted!" text$/, async () => {
  const heading = $(
    `//h2[@data-qa="account-deleted"]//b[. = "Account Deleted!"]`,
  );
  await heading.waitForDisplayed();
  await expect(heading).toBeDisplayed();
});

When(/^$/, async () => {
  //
});
