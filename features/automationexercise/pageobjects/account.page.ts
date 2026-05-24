import Page from "./page.js";

class AccountPage extends Page {
  private get accountCreatedHeading() {
    return $('//h2[@data-qa="account-created"]//b');
  }

  private get accountDeletedHeading() {
    return $('//h2[@data-qa="account-deleted"]//b');
  }

  public get continueButton() {
    return $('//a[@data-qa="continue-button"]');
  }

  public async expectAccountCreated() {
    await expect(this.accountCreatedHeading).toHaveText("ACCOUNT CREATED!");
  }

  public async expectAccountDeleted() {
    await expect(this.accountDeletedHeading).toHaveText("ACCOUNT DELETED!");
  }
}

export default new AccountPage();
