"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_po_1 = require("../pages/LoginPage.po");
const MyAccountPage_po_1 = require("../pages/MyAccountPage.po");
const ForgotPasswordPage_po_1 = require("../pages/ForgotPasswordPage.po");
describe('Login Page Tests', () => {
    let loginPage;
    let myAccountPage;
    let forgotPasswordPage;
    const correctUser = 'polinatrn@gmail.com';
    const correctPassword = 'Aa123';
    const incorrectUser = 'somebody@gmail.com';
    const incorrectPassword = 'Aa12';
    const correctPasswordOfAnotherUser = 'Aa12345';
    beforeAll(() => {
        protractor_1.browser.waitForAngularEnabled(false);
        loginPage = new LoginPage_po_1.LoginPage();
        myAccountPage = new MyAccountPage_po_1.MyAccountPage();
        forgotPasswordPage = new ForgotPasswordPage_po_1.ForgotPasswordPage();
    });
    beforeEach(() => {
        protractor_1.browser.get(myAccountPage.url);
        myAccountPage.logout();
        protractor_1.browser.get(loginPage.url);
    });
    it('Should navigate to My Account page when submiting login with correct credentials', () => {
        loginPage.login(correctUser, correctPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(myAccountPage.url);
    });
    it('Should navigate to My Account page when submiting login with correct email in uppercase and correct password', () => {
        loginPage.login(correctUser.toUpperCase(), correctPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(myAccountPage.url);
    });
    it('Should stay on Login Page and display error when login with correct email, password in uppercase', () => __awaiter(this, void 0, void 0, function* () {
        loginPage.login(correctUser, correctPassword.toUpperCase());
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nAuthentication failed.']);
    }));
    it('Should stay on Login Page and display error when login with correct email, incorrect password', () => __awaiter(this, void 0, void 0, function* () {
        loginPage.login(correctUser, incorrectPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
    }));
    it('Should stay on Login Page and display error when login with incorrect email, correct password', () => __awaiter(this, void 0, void 0, function* () {
        loginPage.login(incorrectUser, correctPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nAuthentication failed.']);
    }));
    it('Should stay on Login Page and display error when login with incorrect email, incorrect password', () => __awaiter(this, void 0, void 0, function* () {
        loginPage.login(incorrectUser, incorrectPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
    }));
    it('Should stay on Login Page and display error when login with correct email, correct password of another user', () => __awaiter(this, void 0, void 0, function* () {
        loginPage.login(correctUser, incorrectPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
    }));
    it('Should navigate to FORGOT YOUR PASSWORD page when the link is clicked', () => {
        loginPage.forgotPasswordLink().click();
        expect(protractor_1.browser.getCurrentUrl()).toEqual(forgotPasswordPage.url);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWMvbG9naW4uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHdEQUFrRDtBQUNsRCxnRUFBMEQ7QUFDMUQsMEVBQW9FO0FBRXBFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDaEMsSUFBSSxTQUFvQixDQUFDO0lBQ3pCLElBQUksYUFBNEIsQ0FBQztJQUNqQyxJQUFJLGtCQUFzQyxDQUFDO0lBQzNDLE1BQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO0lBQzFDLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQztJQUNoQyxNQUFNLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQztJQUMzQyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztJQUNqQyxNQUFNLDRCQUE0QixHQUFHLFNBQVMsQ0FBQTtJQUU5QyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2Isb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxTQUFTLEdBQUcsSUFBSSx3QkFBUyxFQUFFLENBQUM7UUFDNUIsYUFBYSxHQUFHLElBQUksZ0NBQWEsRUFBRSxDQUFDO1FBQ3BDLGtCQUFrQixHQUFHLElBQUksMENBQWtCLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZCLG9CQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrRkFBa0YsRUFBRSxHQUFHLEVBQUU7UUFDMUYsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhHQUE4RyxFQUFFLEdBQUcsRUFBRTtRQUN0SCxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0dBQWtHLEVBQUUsR0FBUyxFQUFFO1FBQ2hILFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxNQUFNLGFBQWEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0ZBQStGLEVBQUUsR0FBUyxFQUFFO1FBQzdHLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sYUFBYSxHQUFHLE1BQU0sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrRkFBK0YsRUFBRSxHQUFTLEVBQUU7UUFDN0csU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sYUFBYSxHQUFHLE1BQU0sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpR0FBaUcsRUFBRSxHQUFTLEVBQUU7UUFDL0csU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsTUFBTSxhQUFhLEdBQUcsTUFBTSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLDZHQUE2RyxFQUFFLEdBQVMsRUFBRTtRQUMzSCxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxNQUFNLGFBQWEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdUVBQXVFLEVBQUUsR0FBRyxFQUFFO1FBQy9FLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==