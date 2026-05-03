import Page from "./page.js";

class AccountPage extends Page {
  public get continueButton() {
    return $('//a[@data-qa="continue-button"]');
  }

  public get accountCreatedHeading() {
    return $('//h2[@data-qa="account-created"]//b[. = "Account Created!"]');
  }

  public get accountDeletedHeading() {
    return $('//h2[@data-qa="account-deleted"]//b[. = "Account Deleted!"]');
  }
}

export default new AccountPage();
