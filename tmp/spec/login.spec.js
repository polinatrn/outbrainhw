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
describe('Login Page Tests', function () {
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
    });
    it('Should navigate to My Account page when submiting login with correct credentials', () => {
        protractor_1.browser.get(loginPage.url);
        loginPage.login(correctUser, correctPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(myAccountPage.url);
    });
    it('Should navigate to My Account page when submiting login with correct email in uppercase and correct password', () => {
        protractor_1.browser.get(loginPage.url);
        loginPage.login(correctUser.toUpperCase(), correctPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(myAccountPage.url);
    });
    it('Should stay on Login Page and display error when login with correct email, password in uppercase', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get(loginPage.url);
        loginPage.login(correctUser, correctPassword.toUpperCase);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
    }));
    it('Should stay on Login Page and display error when login with correct email, incorrect password', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get(loginPage.url);
        loginPage.login(correctUser, incorrectPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
    }));
    it('Should stay on Login Page and display error when login with incorrect email, correct password', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get(loginPage.url);
        loginPage.login(incorrectUser, correctPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nAuthentication failed.']);
    }));
    it('Should stay on Login Page and display error when login with incorrect email, incorrect password', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get(loginPage.url);
        loginPage.login(incorrectUser, incorrectPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
    }));
    it('Should stay on Login Page and display error when login with correct email, correct password of another user', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get(loginPage.url);
        loginPage.login(correctUser, incorrectPassword);
        expect(protractor_1.browser.getCurrentUrl()).toEqual(loginPage.url);
        const errorMessages = yield loginPage.errorHeader();
        expect(errorMessages).toEqual(['There is 1 error\nInvalid password.']);
    }));
    it('Should navigate to FORGOT YOUR PASSWORD page when the link is clicked', () => {
        protractor_1.browser.get(loginPage.url);
        loginPage.forgotPasswordLink().click();
        expect(protractor_1.browser.getCurrentUrl()).toEqual(forgotPasswordPage.url);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWMvbG9naW4uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHdEQUFrRDtBQUNsRCxnRUFBMEQ7QUFDMUQsMEVBQW9FO0FBRXBFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtJQUMzQixJQUFJLFNBQW9CLENBQUM7SUFDekIsSUFBSSxhQUE0QixDQUFDO0lBQ2pDLElBQUksa0JBQXNDLENBQUM7SUFDM0MsTUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUM7SUFDMUMsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDO0lBQ2hDLE1BQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDO0lBQzNDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDO0lBQ2pDLE1BQU0sNEJBQTRCLEdBQUcsU0FBUyxDQUFBO0lBRzlDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLFNBQVMsR0FBRyxJQUFJLHdCQUFTLEVBQUUsQ0FBQztRQUM1QixhQUFhLEdBQUcsSUFBSSxnQ0FBYSxFQUFFLENBQUM7UUFDcEMsa0JBQWtCLEdBQUcsSUFBSSwwQ0FBa0IsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBR0gsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLG9CQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0ZBQWtGLEVBQUUsR0FBRyxFQUFFO1FBQzFGLG9CQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMs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