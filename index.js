'use strict';
//config.
const config = require('./config');

//bin
const bin = require('./bin');

module.exports = new bin(config.tree);