"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
/**
 * @export
 * @class LoginPage
 */
class LoginPage {
    constructor() {
        this.url = 'http://automationpractice.com/index.php?controller=authentication';
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
}
exports.LoginPage = LoginPage;
{
    protractor_1.element.all(protractor_1.by.className('alert alert-danger')).each(function (element) {
        element.isDisplayed().then(function (result) {
            if (result) {
                element.getText().then((text) => {
                    return text;
                });
            }
        });
    });
}
login(username, password);
{
    this.userNameTextBox().sendKeys(username);
    this.passwordTextBox().sendKeys(password);
    this.loginSubmitButton().click();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvTG9naW5QYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW9FO0FBRXBFOzs7R0FHRztBQUNIO0lBQUE7UUFDSSxRQUFHLEdBQUcsbUVBQW1FLENBQUE7SUFlakQsQ0FBQyxBQUFGO0lBYnZCLGVBQWU7UUFDWCxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBR3NCO0FBaEIzQiw4QkFnQjJCO0FBQUM7SUFDcEIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsT0FBTztRQUNqRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtZQUNuQyxJQUFLLE1BQU0sRUFBRztnQkFDVixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzVCLE9BQU8sSUFBSSxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztDQUVSO0FBR0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUFDO0lBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUNwQyJ9