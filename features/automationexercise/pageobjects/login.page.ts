import Page from "./page.js";

class LoginPage extends Page {
  private get nameInput() {
    return $('//input[@data-qa="signup-name"]');
  }

  private get signupEmailInput() {
    return $('//input[@data-qa="signup-email"]');
  }

  private get loginEmailInput() {
    return $('//input[@data-qa="login-email"]');
  }

  private get passwordInput() {
    return $('//input[@data-qa="login-password"]');
  }

  public get signupButton() {
    return $('//button[@data-qa="signup-button"]');
  }

  public get loginButton() {
    return $('//button[@data-qa="login-button"]');
  }

  public async fillSignupFields(name: string, email: string) {
    await this.nameInput.setValue(name);
    await this.signupEmailInput.setValue(email);
  }

  public async fillLoginFields(email: string, password: string) {
    await this.loginEmailInput.setValue(email);
    await this.passwordInput.setValue(password);
  }
}

export default new LoginPage();
