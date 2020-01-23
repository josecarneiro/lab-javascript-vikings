'use strict';

const rewire = require('rewire');
const helperList = rewire('./../src/viking.js');

const helperNames = ['Soldier', 'Viking', 'Saxon', 'War'];

for (let name of helperNames) {
  try {
    const helper = helperList.__get__(name);
    global[name] = helper;
  } catch (error) {
    // Helper not defined in the movies file
  }
}
