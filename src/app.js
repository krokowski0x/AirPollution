const fs = require('fs');
const setup = require('./setup');

const setupExists = () => {
  try {
    const setupFile = fs.readFileSync('app-setup.json');
    return JSON.parse(setupFile);
  } catch (err) {
    return false;
  }
};

const checkPollution = () => {
  console.log('Checking pollution...');
};

setupExists() ? checkPollution() : setup.runSetup();
