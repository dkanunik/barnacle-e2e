const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber.json',
    output: 'reports/cucumber.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    screenshotsDirectory: 'reports/screenshots/',
    storeScreenshots: true
};

reporter.generate(options);
