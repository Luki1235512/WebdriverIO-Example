import { Then, When } from "@wdio/cucumber-framework";
import AccountPage from "../pageobjects/account.page.js";

Then(/^I should see "Account Created!" text$/, async () => {
  await AccountPage.expectAccountCreated();
});

Then(/^I should see "Account Deleted!" text$/, async () => {
  await AccountPage.expectAccountDeleted();
});

When(/^I click "Continue" button$/, async () => {
  await AccountPage.continueButton.click();
});
