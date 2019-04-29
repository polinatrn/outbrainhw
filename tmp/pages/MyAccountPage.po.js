"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
/**
 * @export
 * @class MyAccountPage
 */
class MyAccountPage {
    constructor() {
        this.url = 'http://automationpractice.com/index.php?controller=my-account';
    }
    logout() {
        let logoutButton = protractor_1.element(protractor_1.by.className('logout'));
        logoutButton.isPresent().then((result) => {
            if (result) {
                logoutButton.click();
            }
            else {
                //already signed out, nothing to do
            }
        });
    }
}
exports.MyAccountPage = MyAccountPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlBY2NvdW50UGFnZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL015QWNjb3VudFBhZ2UucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFFekM7OztHQUdHO0FBQ0g7SUFBQTtRQUNFLFFBQUcsR0FBRywrREFBK0QsQ0FBQztJQVd4RSxDQUFDO0lBVkMsTUFBTTtRQUNKLElBQUksWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25ELFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN2QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsbUNBQW1DO2FBQ3BDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFaRCxzQ0FZQyJ9