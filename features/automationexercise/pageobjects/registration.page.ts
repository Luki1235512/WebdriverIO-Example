import Page from "./page.js";

interface AccountDetails {
  password: string;
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

class RegistrationPage extends Page {
  public get titleMr() {
    return $("#id_gender1");
  }

  public get titleMrs() {
    return $("#id_gender2");
  }

  public get inputPassword() {
    return $('input[data-qa="password"]');
  }

  public get inputFirstName() {
    return $('input[data-qa="first_name"]');
  }

  public get inputLastName() {
    return $('input[data-qa="last_name"]');
  }

  public get inputCompany() {
    return $('input[data-qa="company"]');
  }

  public get inputAddress() {
    return $('input[data-qa="address"]');
  }

  public get selectCountry() {
    return $('select[data-qa="country"]');
  }

  public get inputState() {
    return $('input[data-qa="state"]');
  }

  public get inputCity() {
    return $('input[data-qa="city"]');
  }

  public get inputZipcode() {
    return $('input[data-qa="zipcode"]');
  }

  public get inputMobileNumber() {
    return $('input[data-qa="mobile_number"]');
  }

  public get btnCreateAccount() {
    return $('button[data-qa="create-account"]');
  }

  public get accountCreatedMessage() {
    return $('h2[data-qa="account-created"]');
  }

  public get btnContinue() {
    return $('a[data-qa="continue-button"]');
  }

  public get accountDeletedMessage() {
    return $('h2[data-qa="account-delete"]');
  }

  public async fillAccountDetails(details: AccountDetails) {
    await this.titleMr.click();
    await this.inputPassword.setValue(details.password);
    await this.inputFirstName.setValue(details.firstName);
    await this.inputLastName.setValue(details.lastName);

    if (details.company) {
      await this.inputCompany.setValue(details.company);
    }

    await this.inputAddress.setValue(details.address);
    await this.selectCountry.selectByVisibleText(details.country);
    await this.inputState.setValue(details.state);
    await this.inputCity.setValue(details.city);
    await this.inputZipcode.setValue(details.zipcode);
    await this.inputMobileNumber.setValue(details.mobileNumber);
  }
}

export default new RegistrationPage();
