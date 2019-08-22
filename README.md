# Kizazi

A simple mapping library.

## Installation

```shell
$ npm i kizazi
```

## Why

Convert this...

```js
// someFile.js
let fileA = '../../../../fileA';
let fileB = '../../../../fileB';
...
let fileN = '../../../../fileN';
```

to this (ofcourse with a little setup)...

```js
// global.js. set path to common files
const kizazi = require("kizazi");
const tree = path.join(__dirname, 'path/to/directory'); // ,or JSON Object
const k = new kizazi(tree);
k.setLabel("file", ["..", "..", "..", ".."]);
k.setLabel("fileA", ["fileA"]);
k.setLabel('fileB', ['fileB']);
...
k.setLabel('fileN', ['fileN']);
module.exports = k;

// someFile.js. require global.js
const G = require("path/to/global").label("file");
let fileA = G.appendLabel("fileA");
G.appendLabel("fileB"); //access fileB directly
...
let fileN = G.appendLabel("fileN");
```

## Usage

```js

...

//set new tree
k.setTree(tree);

//set new generation (or set generation using label);
k.generation('folderA', 'folderA', 'folderA', 'fileA');
// k.setLabel('folderA', ['folderA', 'folderA', 'folderA', 'fileA']);

//access value
k.link
// k.label('folderA').link
// => 'fileAAAA'

```

```js
//define tree
const tree = {
  folderA: {
    folderA: {
      folderA: {
        fileA: "fileAAAA"
      }
    },
    folderB: {
      folderA: {
        fileA: "fileABAA"
      },
      fileA: "fileABA"
    },
    folderC: {
      fileA: "fileACA"
    }
  },
  folderB: {
    folderA: {
      fileA: "fileBAA"
    },
    fileA: "fileBA"
  },
  folderC: {
    fileA: "fileCA"
  },
  fileA: "fileA",
  fileB: "fileB",
  fileC: "fileC"
};
```

## Addition

```js
...
console.log(k.getTree);
// => current tree Object or path

console.log(k.getGeneration);
// => ['folderA', 'folderA', 'folderA', 'fileA'];

//append generations
k.generation('folderA', 'folderA');
gen.appendGeneration('folderA', 'fileA');
console.log(k.getGeneration);
// => ['folderA', 'folderA', 'folderA', 'fileA'];

//append labels
k.setLabel('lblA', ['folderA', 'folderA']);
k.setLabel('lblB', ['folderA', 'fileA']);
k.appendLabel('lblA','lblB');
console.log(k.label('lblA').getGeneration);
// => ['folderA', 'folderA', 'folderA', 'fileA'];

//k.label('lblA');

console.log(k.original);
// => folderA

console.log(k.parent);
// => ['folderA', 'folderA', 'folderA'];

console.log(k.child);
// => fileA

console.log(k.link);
// => 'fileAAAA';
```
