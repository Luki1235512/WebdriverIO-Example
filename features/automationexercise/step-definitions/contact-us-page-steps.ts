import { Then, When } from "@wdio/cucumber-framework";
import ContactPage from "../pageobjects/contact.page.js";
import HomePage from "../pageobjects/home.page.js";

Then(/^I verify "GET IN TOUCH" is visible$/, async () => {
  await ContactPage.expectGetInTouch();
});

When(/^I enter name, email, subject and message$/, async () => {
  await ContactPage.fillContactForm({
    name: "John Doe",
    email: "johndoe@example.com",
    subject: "Contact Us test",
    message: "This is a test message from WebdriverIO.",
  });
});

When(/^I upload file$/, async () => {
  await ContactPage.uploadFile(
    "features/automationexercise/test-data/sample.txt",
  );
});

When(/^I click "Submit" button$/, async () => {
  await ContactPage.submitButton.click();
});

When(/^I click OK button$/, async () => {
  await browser.acceptAlert();
});

Then(
  /^I verify success message "Success! Your details have been submitted successfully." is visible$/,
  async () => {
    await ContactPage.expectSuccessMessage();
  },
);

Then(
  /^I click "Home" button and verify that landed to home page successfully$/,
  async () => {
    await HomePage.homeButton.click();
    await HomePage.expectHomePage();
  },
);
