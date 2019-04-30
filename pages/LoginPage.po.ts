import { element, by, ElementFinder, browser } from 'protractor';

/**
 * @export
 * @class LoginPage
 */
export class LoginPage {
  url = 'http://automationpractice.com/index.php?controller=authentication';

  userNameTextBox(): ElementFinder {
    return element(by.id('email'));
  }

  passwordTextBox(): ElementFinder {
    return element(by.id('passwd'));
  }

  loginSubmitButton(): ElementFinder {
    return element(by.id('SubmitLogin'));
  }

  forgotPasswordLink(): ElementFinder {
    return element(by.className('lost_password form-group')).element(by.tagName('a'));
  }

  login(username, password): void {
    this.userNameTextBox().sendKeys(username);
    this.passwordTextBox().sendKeys(password);
    this.loginSubmitButton().click();
  }

  isValidEmail(email){
      this.userNameTextBox().sendKeys(email);
      element(by.tagName('label')).click();
      var parentDiv = element(by.className('form-group form-ok'));
      return parentDiv.element(by.id('email')).isPresent();
  
  }

  
  isInvalidEmail(email){
    this.userNameTextBox().sendKeys(email);
    element(by.tagName('label')).click();
    var parentDiv = element(by.className('form-group form-error'));
    return parentDiv.element(by.id('email')).isPresent();

}


  errorHeader = async (): Promise<string[]> => {
    const errors = [];
    await element
      .all(by.className('alert alert-danger'))
      .each(async errorElement => {
        const isDispayed = await errorElement.isDisplayed();
        if (isDispayed) {
          const text = await errorElement.getText();
          errors.push(text);
        }
      });
    return errors;
  };


}
