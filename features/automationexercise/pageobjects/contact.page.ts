import path from "path";
import Page from "./page.js";

class ContactPage extends Page {
  private get getInTouchHeading() {
    return $('//h2[contains(normalize-space(.), "Get In Touch")]');
  }

  private get nameInput() {
    return $("//input[@data-qa='name']");
  }

  private get emailInput() {
    return $("//input[@data-qa='email']");
  }

  private get subjectInput() {
    return $("//input[@data-qa='subject']");
  }

  private get messageTextarea() {
    return $('//textarea[@data-qa="message"]');
  }

  private get uploadFileInput() {
    return $('//input[@name="upload_file"]');
  }

  public get submitButton() {
    return $('//input[@data-qa="submit-button"]');
  }

  private get successMessage() {
    return $('//div[@class="status alert alert-success"]');
  }

  public async expectGetInTouch() {
    await expect(this.getInTouchHeading).toHaveText("GET IN TOUCH");
  }

  public async fillContactForm(fields: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    await this.nameInput.setValue(fields.name);
    await this.emailInput.setValue(fields.email);
    await this.subjectInput.setValue(fields.subject);
    await this.messageTextarea.setValue(fields.message);
  }

  public async uploadFile(filePath: string) {
    const absoluteFilePath = path.resolve(process.cwd(), filePath);
    await this.uploadFileInput.setValue(absoluteFilePath);
  }

  public async expectSuccessMessage() {
    await expect(this.successMessage).toHaveText(
      "Success! Your details have been submitted successfully.",
    );
  }
}

export default new ContactPage();
