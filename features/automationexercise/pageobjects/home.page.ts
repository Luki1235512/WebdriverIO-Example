import Page from "./page.js";

class HomePage extends Page {
  private get loggedInAs() {
    return $('//a[i[contains(@class,"fa fa-user")]]');
  }

  public get slider() {
    return $("#slider-carousel");
  }

  public get signupLoginLink() {
    return $('a[href="/login"]');
  }

  public get deleteAccountLink() {
    return $('//a[@href="/delete_account"]');
  }

  public get logoutButton() {
    return $('//a[@href="/logout"]');
  }

  public get homeButton() {
    return $('//a[@href="/"]');
  }

  public get contactUsButton() {
    return $('//a[@href="/contact_us"]');
  }

  public async expectHomePage() {
    await expect(browser).toHaveUrl(
      expect.stringContaining("automationexercise.com"),
    );
  }

  public async expectHomePageTitle() {
    await expect(browser).toHaveTitle(
      expect.stringContaining("Automation Exercise"),
    );
  }

  public async expectLoggedIn(username: string) {
    await expect(this.loggedInAs).toHaveText(`Logged in as ${username}`);
  }

  public async open() {
    await super.open();
    await this.handleConsentPopup();
  }
}

export default new HomePage();
