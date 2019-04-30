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
/**
 * @export
 * @class LoginPage
 */
class LoginPage {
    constructor() {
        this.url = 'http://automationpractice.com/index.php?controller=authentication';
        this.errorHeader = () => __awaiter(this, void 0, void 0, function* () {
            const errors = [];
            yield protractor_1.element
                .all(protractor_1.by.className('alert alert-danger'))
                .each((errorElement) => __awaiter(this, void 0, void 0, function* () {
                const isDispayed = yield errorElement.isDisplayed();
                if (isDispayed) {
                    const text = yield errorElement.getText();
                    errors.push(text);
                }
            }));
            return errors;
        });
    }
    userNameTextBox() {
        return protractor_1.element(protractor_1.by.id('email'));
    }
    passwordTextBox() {
        return protractor_1.element(protractor_1.by.id('passwd'));
    }
    loginSubmitButton() {
        return protractor_1.element(protractor_1.by.id('SubmitLogin'));
    }
    forgotPasswordLink() {
        return protractor_1.element(protractor_1.by.className('lost_password form-group')).element(protractor_1.by.tagName('a'));
    }
    login(username, password) {
        this.userNameTextBox().sendKeys(username);
        this.passwordTextBox().sendKeys(password);
        this.loginSubmitButton().click();
    }
    isValidEmail(email) {
        this.userNameTextBox().sendKeys(email);
        protractor_1.element(protractor_1.by.tagName('label')).click();
        var parentDiv = protractor_1.element(protractor_1.by.className('form-group form-ok'));
        return parentDiv.element(protractor_1.by.id('email')).isPresent();
    }
    isInvalidEmail(email) {
        this.userNameTextBox().sendKeys(email);
        protractor_1.element(protractor_1.by.tagName('label')).click();
        var parentDiv = protractor_1.element(protractor_1.by.className('form-group form-error'));
        return parentDiv.element(protractor_1.by.id('email')).isPresent();
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvTG9naW5QYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUU7QUFFakU7OztHQUdHO0FBQ0g7SUFBQTtRQUNFLFFBQUcsR0FBRyxtRUFBbUUsQ0FBQztRQTBDMUUsZ0JBQVcsR0FBRyxHQUE0QixFQUFFO1lBQzFDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixNQUFNLG9CQUFPO2lCQUNWLEdBQUcsQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7aUJBQ3ZDLElBQUksQ0FBQyxDQUFNLFlBQVksRUFBQyxFQUFFO2dCQUN6QixNQUFNLFVBQVUsR0FBRyxNQUFNLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsTUFBTSxJQUFJLEdBQUcsTUFBTSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ25CO1lBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQztZQUNMLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQSxDQUFDO0lBR0osQ0FBQztJQXZEQyxlQUFlO1FBQ2IsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLElBQUksU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDNUQsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUV6RCxDQUFDO0lBR0QsY0FBYyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFekQsQ0FBQztDQWtCQTtBQTFERCw4QkEwREMifQ==