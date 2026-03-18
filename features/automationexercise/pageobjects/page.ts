import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open(path?: string): Promise<void | WebdriverIO.Request> {
    return browser.url(`https://automationexercise.com/${path}`);
  }

  public async handleConsentPopup(): Promise<void> {
    try {
      const consentButton = $(".fc-button-label");

      if (await consentButton.isDisplayed()) {
        await consentButton.click();
        // await browser.pause(1000);
      }
    } catch {
      // Ignore error
    }
  }
}
