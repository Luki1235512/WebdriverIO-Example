import Page from "./page.js";

class LoginPage extends Page {
  private get NameInput() {
    return $('//input[@data-qa="signup-name"]');
  }

  private get emailInput() {
    return $('//input[@data-qa="signup-email"]');
  }

  public get signupButton() {
    return $('//button[@data-qa="signup-button"]');
  }

  public async fillSignupFields(name: string, email: string) {
    await this.NameInput.setValue(name);
    await this.emailInput.setValue(email);
  }
}

export default new LoginPage();
