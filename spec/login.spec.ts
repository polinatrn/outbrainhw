import { browser, element, by } from 'protractor';
import {LoginPage} from '../pages/LoginPage.po';
import {MyAccountPage} from '../pages/MyAccountPage.po';

describe('Login Page Tests', function() {
    var loginPage: LoginPage;
    var myAccountPage: MyAccountPage;
    var correctUser = 'polinatrn@gmail.com'
    var correctPassword = 'Aa123'
    var incorrectUser = 'somebody@gmail.com'
    var incorrectPassword = 'Aa12'



    beforeEach(() => {
      browser.waitForAngularEnabled(false);  
      loginPage = new LoginPage();
      myAccountPage = new MyAccountPage();
      browser.get(myAccountPage.url);
      myAccountPage.logout();
        
    });

  it('Should navigate to My Account page when submiting login with correct credentials', function() {
    browser.get(loginPage.url);
    loginPage.login(correctUser, correctPassword);
    expect(browser.getCurrentUrl()).toEqual(myAccountPage.url); 
  });

  it('Should stay on Login Page and display error when login with correct email, incorrect password', function() {
    browser.get(loginPage.url);
    loginPage.login(incorrectUser, incorrectPassword);
    expect(browser.getCurrentUrl()).toEqual(loginPage.url); 
    loginPage.errorHeader().then (function(errorMessage){
      console.log(errorMessage);
      expect(errorMessage).toEqual("There is 1 error\nInvalid password.");
    });
  });
});