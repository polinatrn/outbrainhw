"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Login Page Tests', function () {
    it('should login with correct credentials', function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('http://automationpractice.com/index.php?controller=authentication');
        protractor_1.element(protractor_1.by.id('email')).sendKeys('polinatrn@gmail.com');
        protractor_1.element(protractor_1.by.id('passwd')).sendKeys('Aa123');
        protractor_1.element(protractor_1.by.id('SubmitLogin')).click();
        expect(protractor_1.browser.getCurrentUrl()).toEqual("http://automationpractice.com/index.php?controller=my-account");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWMvc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUVsRCxRQUFRLENBQUMsa0JBQWtCLEVBQUU7SUFDM0IsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1FBQzFDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsbUVBQW1FLENBQUMsQ0FBQztRQUNqRixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN4RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0Msb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsTUFBTSxDQUFDLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsK0RBQStELENBQUMsQ0FBQztJQUMzRyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=