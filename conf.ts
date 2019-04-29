import {Config} from 'protractor';

export let config: Config =  {
  framework: 'jasmine',
  multiCapabilities: [
    // {
    // 'browserName': 'firefox'
  // },
   {
    'browserName': 'chrome'
  }],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/login.spec.js', 'spec/email-validation.spec.ts'],
  noGlobals: true
}