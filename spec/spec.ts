describe('Login Page Tests', function() {
  it('should login with correct credentials', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php?controller=authentication');
    element(by.id('email')).sendKeys('polinatrn@gmail.com');
    element(by.id('passwd')).sendKeys('Aa123');
browser.sleep(2000);    
element(by.id('SubmitLogin')).click();
browser.sleep(2000); 
    expect(browser.getCurrentUrl()).toEqual("http://automationpractice.com/index.php?controller=my-account"); 

   

   



  });
});