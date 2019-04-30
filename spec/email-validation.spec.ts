import { browser } from 'protractor';
import { LoginPage } from '../pages/LoginPage.po';
import { MyAccountPage } from '../pages/MyAccountPage.po';
import { getMaxListeners } from 'cluster';

describe('Login Page Tests - email validation functionality', () => {
  let loginPage: LoginPage;
  let myAccountPage: MyAccountPage;
  let validEmails = ['johnsmith@example.com', 'john.smith@example.com', 'john_smith@example.com', 'john.smith@example.co.il', 'firstname+lastname@example.com', '1234567890@example.com', 'email@example-one.com', 'email@example.museum', 'email@123.123.123.123', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com']
  let inValidEmails = ['plainaddress', '#@%^%#$@#$@#.com', '@example.com', 'Joe Smith <email@example.com>', 'email.example.com', 'email@example@example.com', '.email@example.com', 'email.@example.com', 'email..email@example.com', 'email@example.com (Joe Smith)', 'email@example', 'email@-example.com', 'email@example..com', 'Abc..123@example.com', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa']
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();
    browser.get(loginPage.url);
  });

  beforeEach(() => {
    browser.get(myAccountPage.url);
    myAccountPage.logout();
  });

  it('Should mark valid emails as valid', () => {
    validEmails.forEach(function (validEmail) {
      const valid = loginPage.isValidEmail(validEmail)
      expect(valid).toBe(true, 'Should be valid: ' + validEmail);
      browser.refresh();
    });
  });

  it('Should mark invalid emails as invalid', () => {
    inValidEmails.forEach(function (email) {
      const invalid = loginPage.isInvalidEmail(email)
      expect(invalid).toBe(true, 'Should be invalid: ' + email);
      browser.refresh();
    });
  });
});
