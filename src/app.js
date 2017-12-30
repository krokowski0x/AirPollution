const fs = require('fs');
const setup = require('./setup');
const pollution = require('./pollution');

fs.existsSync('app-setup.json') ? pollution.checkPollution() : setup.runSetup();
