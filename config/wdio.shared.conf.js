exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 90000,
        helpers: [require.resolve('@babel/register')],
    },
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec'],

    // ====================
    // Appium Configuration
    // ====================
    // services: [
    //     [
    //         'appium',
    //         {
    //         // For options see
    //         // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    //             args: {
    //                 // Auto download ChromeDriver
    //                 relaxedSecurity: true,
    //                 // chromedriverAutodownload: true,
    //                 // For more arguments see
    //                 // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    //             },
    //             command: 'appium',
    //         },
    //     ],
    // ],
    services: ['selenium-standalone'],
    // services: [
    //   ['appium', { 
    //     command: 'appium',
    //     args: {
    //       platformName: 'Android',
    //       deviceName: 'Pixel3a_XL_API_30',
    //       // app: join(process.cwd(), './ApiDemos-debug.apk'),
    //       automationName: 'Appium',
    //       platformVersion: '11.0'
    //     } 
    //   }]
    // ],
    port: 4723,
};
