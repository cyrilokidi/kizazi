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
let fileA = "../../../fileA";
let fileB = "../../../fileB";
...
let fileN = "../../../fileN";
```

to this (with a little setup, of course)...

```js
// global.js
const kizazi = require("kizazi"); // require("kizazi").fs for filesystem
const tree = "../../../"; // ,or JSON Object
const k = new kizazi(tree);
k.setLabel("file", ["..", "..", ".."]);
k.setLabel("fileA", ["fileA"]);
k.setLabel("fileB", ["fileB"]);
...
k.setLabel("fileN", ["fileN"]);
module.exports = k;

// someFile.js. require global.js
const G = require("path/to/global").label("file");
let fileA = G.appendLabel("fileA");
G.appendLabel("fileB"); //access fileB directly
...
let fileN = G.appendLabel("fileN");
```

## Usage

Specifically use **require("kizazi").fs** for filesystem, else use **require("kizazi")** for JSON Object.

```js
...
//set new tree
k.setTree(tree);

//set new generation
k.generation("folderA", "folderA", "folderA", "fileA");
//,or set generation using label
// k.setLabel("folderA", ["folderA", "folderA", "folderA", "fileA"]);

//access value
k.link
// k.label("folderA").link
// => "A/A/A/A"
```

```js
//define tree as Object
const tree = {
  folderA: {
    folderA: {
      folderA: {
        fileA: "A/A/A/A"
      }
    }
  },
  folderB: {
    folderA: {
      fileA: "B/A/A"
    },
    fileA: "B/A"
  }
};
```

## Addition

```js
...
console.log(k.getTree);
// => current tree Object or path

console.log(k.getGeneration);
// => ["folderA", "folderA", "folderA", "fileA"];

//append generations
k.generation('folderA', 'folderA');
gen.appendGeneration('folderA', 'fileA');
console.log(k.getGeneration);
// => ["folderA", "folderA", "folderA", "fileA"];

//append labels
k.setLabel("lblA", ["folderA", "folderA"]);
k.setLabel("lblB", ["folderA", "fileA"]);
k.appendLabel("lblA","lblB");
console.log(k.label("blA").getGeneration);
// => ["folderA", "folderA", "folderA", "fileA"];

//k.label('lblA');

console.log(k.original);
// => folderA

console.log(k.parent);
// => ["folderA", "folderA", "folderA"];

console.log(k.child);
// => fileA

console.log(k.link);
// => "A/A/A/A";
```
