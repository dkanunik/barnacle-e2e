const {client} = require('nightwatch-cucumber');
const {Given} = require('cucumber');

const frontHost = process.env.FRONT_HOST;
const frontPort = process.env.FRONT_PORT;

Given(/^I have opened Main Page$/, () => {
    return client
        .url(`http://${frontHost}:${frontPort}/`);
});
