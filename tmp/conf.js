"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine',
    multiCapabilities: [
        //   {
        //   'browserName': 'firefox'
        // },
        {
            'browserName': 'chrome'
        }
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/login.spec.js', 'spec/email-validation.spec.js'],
    noGlobals: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFVyxRQUFBLE1BQU0sR0FBWTtJQUMzQixTQUFTLEVBQUUsU0FBUztJQUNwQixpQkFBaUIsRUFBRTtRQUNuQixNQUFNO1FBQ04sNkJBQTZCO1FBQzdCLEtBQUs7UUFDSjtZQUNDLGFBQWEsRUFBRSxRQUFRO1NBQ3hCO0tBQ0Y7SUFDQyxlQUFlLEVBQUUsOEJBQThCO0lBQy9DLEtBQUssRUFBRSxDQUFDLG9CQUFvQixFQUFFLCtCQUErQixDQUFDO0lBQzlELFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUEifQ==