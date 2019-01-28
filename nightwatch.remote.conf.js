const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'test/e2e/libs',
        '--require', 'test/e2e/step_definitions',
        '--format', 'json:reports/cucumber.json',
        '--format', 'node_modules/cucumber-pretty',
        'test/e2e/features'
    ]
});

const nightwatchConfig = {
    output_folder : 'reports',
    custom_commands_path : '',
    custom_assertions_path : '',
    page_objects_path : '',
    globals_path : '',

    selenium: {
        start_process: false
    },

    test_settings : {
        default : {
            selenium_port: '4444',
            selenium_host: process.env.SELENIUM_HOST,
            silent: true,
            screenshots : {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: './reports/screenshots'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                marionette: true
            }
        },

        chrome : {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};

module.exports = nightwatchConfig;
