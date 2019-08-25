/**
 * Config.: Default setting.
 */
const { tree } = require('./config');

/**
 * Class
 */
const Bin = require('./bin');
const Obj = require('./bin/obj');

module.exports = new Bin(tree.path);
module.exports.obj = new Obj(tree.object);
