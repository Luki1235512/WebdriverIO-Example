import Page from "./page.js";

class HomePage extends Page {
  public get slider() {
    return $("#slider-carousel");
  }

  public get singupLoginLink() {
    return $('a[href="/login"]');
  }

  public get deleteAccountLink() {
    return $('//a[@href="/delete_account"]');
  }

  public async open() {
    await super.open();
    await this.handleConsentPopup();
  }
}

export default new HomePage();
