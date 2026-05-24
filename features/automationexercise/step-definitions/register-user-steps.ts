import { Then, When } from "@wdio/cucumber-framework";
import { testContext } from "../context/test-context.js";
import LoginPage from "../pageobjects/login.page.js";
import SignupPage from "../pageobjects/signup.page.js";

Then(/^I should see "New User Signup!" text$/, async () => {
  await SignupPage.expectNewUserSignup();
});

Then(/^I should see "Enter Account Information" text$/, async () => {
  await SignupPage.expectAccountInformation();
});

When(/^I enter name and email address$/, async () => {
  const timestamp = Date.now();
  testContext.name = `TestUser${timestamp}`;
  const email = `testuser${timestamp}@example.com`;
  await LoginPage.fillSignupFields(testContext.name, email);
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
