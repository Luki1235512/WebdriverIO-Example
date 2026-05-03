import Page from "./page.js";

class HomePage extends Page {
  public get slider() {
    return $("#slider-carousel");
  }

  public get signupLoginLink() {
    return $('a[href="/login"]');
  }

  public get deleteAccountLink() {
    return $('//a[@href="/delete_account"]');
  }

  public get loggedInHeading() {
    return $('//a[i[@class="fa fa-user"] and contains(., "Logged in as")]');
  }

  public async open() {
    await super.open();
    await this.handleConsentPopup();
  }
}

export default new HomePage();
