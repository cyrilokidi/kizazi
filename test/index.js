'use strict';
// tree
module.exports.object = require('./data').object; //as object
module.exports.folder = require('./data').folder; //as directory path

// generation
module.exports.gen = ['folderA', 'folderA', 'folderA', 'fileA']; //default
module.exports.genA = ['folderA', 'folderA', 'folderA']; //first part
module.exports.genB = ['fileA']; //second part

// value
module.exports.value = 'A/A/A/A'; //epected value