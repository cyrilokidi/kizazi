'use strict';
//config.
const config = require('./config');

//bin
const bin = require('./bin');
const fs = require('./bin/fs');

module.exports = new bin(config.tree);
module.exports.fs = new fs(config.tree);