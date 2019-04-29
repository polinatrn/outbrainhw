"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
/**
 * @export
 * @class MyAccountPage
 */
class MyAccountPage {
    constructor() {
        this.url = "http://automationpractice.com/index.php?controller=my-account";
    }
    logout() {
        var logoutButton = protractor_1.element(protractor_1.by.className('logout'));
        logoutButton.isPresent().then(function (result) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlBY2NvdW50UGFnZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL015QWNjb3VudFBhZ2UucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0U7QUFFcEU7OztHQUdHO0FBQ0g7SUFBQTtRQUNJLFFBQUcsR0FBRywrREFBK0QsQ0FBQTtJQVl6RSxDQUFDO0lBWEcsTUFBTTtRQUNGLElBQUksWUFBWSxHQUFJLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BELFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxNQUFNO1lBQzdDLElBQUssTUFBTSxFQUFHO2dCQUNWLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN4QjtpQkFBTTtnQkFDSCxtQ0FBbUM7YUFDdEM7UUFDRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FDSjtBQWJELHNDQWFDIn0=