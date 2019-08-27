'use strict';
/**
 * Config.: Default setting.
 */
const { tree } = require('./config');

/**
 * Class
 */
const Lib = require('./lib');
const Obj = require('./lib/obj');

module.exports = new Lib(tree.path);
module.exports.obj = new Obj(tree.object);
