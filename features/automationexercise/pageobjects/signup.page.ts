import Page from "./page.js";

interface AddressInformation {
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

interface AccountInformation {
  title?: string;
  password: string;
  dateOfBirth?: {
    day: string;
    month: string;
    year: string;
  };
}

class SingupPage extends Page {
  public get titleMr() {
    // return $("#id_gender1");
    return $('//div[@id="uniform-id_gender1"]');
  }

  public get titleMrs() {
    // return $("#id_gender2");
    return $('//div[@id="uniform-id_gender2"]');
  }

  public get passwordInput() {
    return $('//input[@data-qa="password"]');
  }

  public get daySelect() {
    return $('//select[@data-qa="days"]');
  }

  public get monthSelect() {
    return $('//select[@data-qa="months"]');
  }

  public get yearSelect() {
    return $('//select[@data-qa="years"]');
  }

  public get newsletterCheckbox() {
    return $('//input[@id="newsletter"]');
  }

  public get specialOffersCheckbox() {
    return $('//input[@id="optin"]');
  }

  public get firstNameInput() {
    return $('//input[@data-qa="first_name"]');
  }

  public get lastNameInput() {
    return $('//input[@data-qa="last_name"]');
  }

  public get companyInput() {
    return $('//input[@data-qa="company"]');
  }

  public get addressInput() {
    return $('//input[@data-qa="address"]');
  }

  public get address2Input() {
    return $('//input[@data-qa="address2"]');
  }

  public get countrySelect() {
    return $('//select[@data-qa="country"]');
  }

  public get stateInput() {
    return $('//input[@data-qa="state"]');
  }

  public get cityInput() {
    return $('//input[@data-qa="city"]');
  }

  public get zipcodeInput() {
    return $('//input[@data-qa="zipcode"]');
  }

  public get mobileNumberInput() {
    return $('//input[@data-qa="mobile_number"]');
  }

  public get createAccountButton() {
    return $('//button[@data-qa="create-account"]');
  }

  public get signupHeading() {
    return $('//div[@class="signup-form"]/h2[1][. = "New User Signup!"]');
  }

  public get accountInformationHeading() {
    return $(
      '//h2[@class="title text-center"]/b[1][. = "Enter Account Information"]',
    );
  }

  public async fillAccountInformationDetails(details: AccountInformation) {
    await (details.title === "Mr." ? this.titleMr : this.titleMrs).click();
    await this.passwordInput.setValue(details.password);

    if (details.dateOfBirth) {
      await this.daySelect.selectByAttribute("value", details.dateOfBirth.day);
      await this.monthSelect.selectByAttribute(
        "value",
        details.dateOfBirth.month,
      );
      await this.yearSelect.selectByAttribute(
        "value",
        details.dateOfBirth.year,
      );
    }
  }

  public async fillAddressInformationDetails(details: AddressInformation) {
    await this.firstNameInput.setValue(details.firstName);
    await this.lastNameInput.setValue(details.lastName);
    await this.companyInput.setValue(details.company ?? "");
    await this.addressInput.setValue(details.address);
    await this.address2Input.setValue(details.address2 ?? "");
    await this.countrySelect.selectByAttribute("value", details.country);
    await this.stateInput.setValue(details.state);
    await this.cityInput.setValue(details.city);
    await this.zipcodeInput.setValue(details.zipcode);
    await this.mobileNumberInput.setValue(details.mobileNumber);
  }
}

export default new SingupPage();
