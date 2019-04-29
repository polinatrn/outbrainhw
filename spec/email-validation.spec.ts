import { browser } from 'protractor';
import { LoginPage } from '../pages/LoginPage.po';
import { MyAccountPage } from '../pages/MyAccountPage.po';

describe('Login Page Tests - email validation functionality', () => {
  let loginPage: LoginPage;
  let myAccountPage: MyAccountPage;

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
    const valid = loginPage.isValidEmail('polinatrn@gmail.com')
    expect(valid).toBe(true);
  });
});
