const { join } = require('path');

exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        // './test/specs/**/*.js'
        './tests/specs/**/browser.checkbox.spec.js',
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        browserName: 'chrome',
        'appium:deviceName': 'Pixel3a_XL_API_30',
        // app: join(process.cwd(), './ApiDemos-debug.apk'),
        'appium:automationName': 'UiAutomator2',
        // automationName: 'Appium',  // This also works instead of 'UiAutomator2'
        'appium:platformVersion': '11.0',
        path: '/wd/hub'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    // services: [
    //   ['appium', { 
    //     command: 'appium',
    //     args: {
    //       platformName: 'Android',
    //       deviceName: 'Pixel3a_XL_API_30',
    //       app: join(process.cwd(), './ApiDemos-debug.apk'),
    //       automationName: 'Appium',
    //       platformVersion: '11.0'
    //     } 
    //   }]
    // ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
