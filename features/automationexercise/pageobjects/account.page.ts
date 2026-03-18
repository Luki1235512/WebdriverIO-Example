import Page from "./page.js";

class AccountPage extends Page {
  public get continueButton() {
    return $('//a[@data-qa="continue-button"]');
  }
}

export default new AccountPage();
