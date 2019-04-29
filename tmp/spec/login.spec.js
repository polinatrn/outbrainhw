"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_po_1 = require("../pages/LoginPage.po");
const MyAccountPage_po_1 = require("../pages/MyAccountPage.po");
describe('Login Page Tests', function () {
    var loginPage;
    var myAccountPage;
    var correctUser = 'polinatrn@gmail.com';
    var correctPassword = 'Aa123';
    var incorrectUser = 'somebody@gmail.com';
    var incorrectPassword = 'Aa12';
    beforeEach(() => {
        protractor_1.browser.waitForAngularEnabled(false);
        loginPage = new LoginPage_po_1.LoginPage();
        myAccountPage = new MyAccountPage_po_1.MyAccountPage();
        protractor_1.browser.get(myAccountPage.url);
        myAccountPage.logout();
    });
    it('Should navigate to My Account page when submiting login with correct credentials', function () {
        protractor_1.browser.get(loginPage.url);
        loginPage.login(correctUser, correctPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(myAccountPage.url);
    });
    it('Should stay on Login Page and display error when login with correct email, incorrect password', function () {
        protractor_1.browser.get(loginPage.url);
        loginPage.login(incorrectUser, incorrectPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        loginPage.errorHeader().then(function (errorMessage) {
            console.log(errorMessage);
            expect(errorMessage).toEqual("There is 1 error\nInvalid password.");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWMvbG9naW4uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUNsRCx3REFBZ0Q7QUFDaEQsZ0VBQXdEO0FBRXhELFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtJQUN6QixJQUFJLFNBQW9CLENBQUM7SUFDekIsSUFBSSxhQUE0QixDQUFDO0lBQ2pDLElBQUksV0FBVyxHQUFHLHFCQUFxQixDQUFBO0lBQ3ZDLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQTtJQUM3QixJQUFJLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQTtJQUN4QyxJQUFJLGlCQUFpQixHQUFHLE1BQU0sQ0FBQTtJQUk5QixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2Qsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxTQUFTLEdBQUcsSUFBSSx3QkFBUyxFQUFFLENBQUM7UUFDNUIsYUFBYSxHQUFHLElBQUksZ0NBQWEsRUFBRSxDQUFDO1FBQ3BDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFekIsQ0FBQyxDQUFDLENBQUM7SUFFTCxFQUFFLENBQUMsa0ZBQWtGLEVBQUU7UUFDckYsb0JBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrRkFBK0YsRUFBRTtRQUNsRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBRSxVQUFTLFlBQVk7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=