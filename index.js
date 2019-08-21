'use strict';
/**
 * Config.: Default setting.
 */
const config = require('./config');

/**
 * Class
 */
const bin = require('./bin');
const fs = require('./bin/fs');

module.exports = new bin(config.tree); //default
module.exports.fs = new fs(config.tree);