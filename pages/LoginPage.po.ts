import { element, by, ElementFinder } from 'protractor';

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

  isValidEmail(email): boolean {
      let result = false;
      this.userNameTextBox().sendKeys(email);
      var parentDiv = this.userNameTextBox().parentElementArrayFinder;
      parentDiv.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf('form-ok') !== -1;
      }).then (function (exists){
        if (exists) {
          result = true;
        }
      });
      return result;  
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
