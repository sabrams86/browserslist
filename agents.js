const agents = require('caniuse-db/data.json').agents;

Object.keys(agents).forEach(function (key) {
    var browser = agents[key];
    browser.versions = browser.versions.filter(Boolean);
});

module.exports = agents;
