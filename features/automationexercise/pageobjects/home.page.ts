import Page from "./page.js";

class HomePage extends Page {
  public get singupLoginLink() {
    return $('a[href="/login"]');
  }

  public async open() {
    await super.open("");
    await this.handleConsentPopup();
  }
}

export default new HomePage();
