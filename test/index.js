'use strict';
// tree
module.exports.obj = require('./data').obj; //as object
module.exports.folder = require('./data').folder; //as directory path

// module path
module.exports.gen = ['folder', 'folder', 'folder'];
module.exports.file = ['file'];
module.exports.fileB = ['folder', 'fileB'];
module.exports.override = ['folder', 'folder', 'folder', 'folder', 'file'];

// module value
module.exports.value = 'file'; //epected value
