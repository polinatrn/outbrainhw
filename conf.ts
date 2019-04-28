import {Config} from 'protractor';

export let config: Config =  {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/spec.js'],
  noGlobals: true
}