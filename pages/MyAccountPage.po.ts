import { element, by } from 'protractor';

/**
 * @export
 * @class MyAccountPage
 */
export class MyAccountPage {
  url = 'http://automationpractice.com/index.php?controller=my-account';
  logout() {
    let logoutButton = element(by.className('logout'));
    logoutButton.isPresent().then((result) => {
      if (result) {
        logoutButton.click();
      } else {
        //already signed out, nothing to do
      }
    });
  }
}
