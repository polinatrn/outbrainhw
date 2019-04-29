import {browser, element, by, ExpectedConditions} from 'protractor';

/**
 * @export
 * @class MyAccountPage
 */
export class MyAccountPage {
    url = "http://automationpractice.com/index.php?controller=my-account"
    logout() {
        var logoutButton =  element(by.className('logout'));
        logoutButton.isPresent().then(function(result) {
        if ( result ) {
            logoutButton.click();
        } else {
            //already signed out, nothing to do
        }
        });
    
    }
}
