import Page from "./page.js";

class AccountPage extends Page {
  private get accountCreatedHeading() {
    return $('//h2[@data-qa="account-created"]//b[. = "Account Created!"]');
  }

  private get accountDeletedHeading() {
    return $('//h2[@data-qa="account-deleted"]//b[. = "Account Deleted!"]');
  }

  public get continueButton() {
    return $('//a[@data-qa="continue-button"]');
  }

  public async expectAccountCreated() {
    const heading = this.accountCreatedHeading;
    await expect(heading).toBeDisplayed();
  }

  public async expectAccountDeleted() {
    const heading = this.accountDeletedHeading;
    await expect(heading).toBeDisplayed();
  }
}

export default new AccountPage();
