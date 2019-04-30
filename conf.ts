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
  specs: ['spec/email-validation.spec.js'],
  noGlobals: true
}