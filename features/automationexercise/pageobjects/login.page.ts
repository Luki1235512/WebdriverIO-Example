import Page from "./page.js";

class LoginPage extends Page {
  public get newUserSignupH2() {
    return $('//div[@class="signup-form"]//h2');
  }

  public get NameInput() {
    return $('//input[@data-qa="signup-name"]');
  }

  public get emailInput() {
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
