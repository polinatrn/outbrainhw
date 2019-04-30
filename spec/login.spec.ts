import { browser } from 'protractor';
import { LoginPage } from '../pages/LoginPage.po';
import { MyAccountPage } from '../pages/MyAccountPage.po';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage.po';

describe('Login Page Tests', () => {
  let loginPage: LoginPage;
  let myAccountPage: MyAccountPage;
  let forgotPasswordPage: ForgotPasswordPage;
  const correctUser = 'polinatrn@gmail.com';
  const correctPassword = 'Aa123';
  const incorrectUser = 'somebody@gmail.com';
  const incorrectPassword = 'Aa12';
  const correctPasswordOfAnotherUser = 'Aa12345'

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();
    forgotPasswordPage = new ForgotPasswordPage();
  });

  beforeEach(() => {
    browser.get(myAccountPage.url);
    myAccountPage.logout();
    browser.get(loginPage.url);
  });

  it('Should navigate to My Account page when submiting login with correct credentials', () => {
    loginPage.login(correctUser, correctPassword);
    expect(browser.getCurrentUrl()).toEqual(myAccountPage.url);
  });
  
  it('Should navigate to My Account page when submiting login with correct email in uppercase and correct password', () => {
    loginPage.login(correctUser.toUpperCase(), correctPassword);
    expect(browser.getCurrentUrl()).toEqual(myAccountPage.url);
  });

  it('Should stay on Login Page and display error when login with correct email, password in uppercase', async () => {
    loginPage.login(correctUser, correctPassword.toUpperCase());
    expect(browser.getCurrentUrl()).toEqual(loginPage.url);
    const errorMessages = await loginPage.errorHeader();
    expect(errorMessages).toEqual(['There is 1 error\nAuthentication failed.']);
  });

  it('Should stay on Login Page and display error when login with correct email, incorrect password', async () => {
    loginPage.login(correctUser, incorrectPassword);
    expect(browser.getCurrentUrl()).toEqual(loginPage.url);
    const errorMessages = await loginPage.errorHeader();
    expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
  });

  it('Should stay on Login Page and display error when login with incorrect email, correct password', async () => {
    loginPage.login(incorrectUser, correctPassword);
    expect(browser.getCurrentUrl()).toEqual(loginPage.url);
    const errorMessages = await loginPage.errorHeader();
    expect(errorMessages).toEqual(['There is 1 error\nAuthentication failed.']);
  });

  it('Should stay on Login Page and display error when login with incorrect email, incorrect password', async () => {
    loginPage.login(incorrectUser, incorrectPassword);
    expect(browser.getCurrentUrl()).toEqual(loginPage.url);
    const errorMessages = await loginPage.errorHeader();
    expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
  });

  
  it('Should stay on Login Page and display error when login with correct email, correct password of another user', async () => {
    loginPage.login(correctUser, incorrectPassword);
    expect(browser.getCurrentUrl()).toEqual(loginPage.url);
    const errorMessages = await loginPage.errorHeader();
    expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
  });

  it('Should navigate to FORGOT YOUR PASSWORD page when the link is clicked', () => {
    loginPage.forgotPasswordLink().click();
    expect(browser.getCurrentUrl()).toEqual(forgotPasswordPage.url);
  });
});
