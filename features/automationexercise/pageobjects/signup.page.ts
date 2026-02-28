import Page from "./page.js";

class SignupPage extends Page {
  public get inputName() {
    return $('input[data-qa="signup-name"]');
  }

  public get inputEmail() {
    return $('input[data-qa="signup-email"]');
  }

  public get btnSignup() {
    return $('button[data-qa="signup-button"]');
  }

  public get errorMessage() {
    return $("form p");
  }

  public async signup(name: string, email: string) {
    await this.inputName.setValue(name);
    await this.inputEmail.setValue(email);
    // await this.btnSignup.click();
  }
}

export default new SignupPage();
