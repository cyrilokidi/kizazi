'use strict';
/**
 * Config.: Default setting.
 */
const { tree } = require('./config');

/**
 * Class
 */
const bin = require('./bin');
const object = require('./bin/object');

module.exports = new bin(tree.path); //default
module.exports.object = new object(tree.object);