'use strict';
// tree
module.exports.obj = require('./data').obj; //as object
module.exports.folder = require('./data').folder; //as directory path

// generation
module.exports.gen = ['folderA', 'folderA', 'folderA', 'fileA']; //default
module.exports.genA = ['folderA', 'folderA', 'folderA']; //first part
module.exports.genB = ['fileA']; //second part

// value
module.exports.value = 'A/A/A/A'; //epected value
