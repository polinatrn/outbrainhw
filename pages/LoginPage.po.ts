import {browser, element, by, ExpectedConditions} from 'protractor';

/**
 * @export
 * @class LoginPage
 */
export class LoginPage {
    url = 'http://automationpractice.com/index.php?controller=authentication'

    userNameTextBox() {
        return element(by.id('email'));
    }

    passwordTextBox() {
        return element(by.id('passwd'));
    }

    loginSubmitButton() {
        return element(by.id('SubmitLogin'));
    }

    
    errorHeader: function() {
        element.all(by.className('alert alert-danger')).each(function(element) {
            element.isDisplayed().then(function (result) {
                    if ( result ) {
                        element.getText().then((text) => {
                            return text;
                        });
                    }
            });
          });
        
    }


    login(username, password) {
        this.userNameTextBox().sendKeys(username);
        this.passwordTextBox().sendKeys(password);
        this.loginSubmitButton().click();
    }
}
