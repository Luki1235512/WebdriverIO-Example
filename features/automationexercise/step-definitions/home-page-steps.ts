import { Given, When } from "@wdio/cucumber-framework";
import { testContext } from "../context/test-context.js";
import HomePage from "../pageobjects/home.page.js";

Given(/^I am on the homepage$/, async () => {
  await HomePage.open();
});

Given(/^I should see the home page$/, async () => {
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

When(/^I should see "Logged in as" username$/, async () => {
  await HomePage.expectLoggedIn(testContext.name);
});

When(/^I click "Delete Account" button$/, async () => {
  await HomePage.deleteAccountLink.click();
});

When(/^I click "Logout" button$/, async () => {
  await HomePage.logoutButton.click();
});
