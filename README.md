# Kizazi

A simple mapping library.

## Installation

```shell
$ npm i kizazi
```

Run test

```shell
$ npm test
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
const k = require("kizazi").fs; // ,or require("kizazi") for JSON Object
const tree = "../../../"; // ,or JSON Object
k.setTree(tree); //set new tree
k.setLabel("folder", ["..", "..", ".."]); //label generation
k.setLabel("fileA", ["fileA"]);
...
k.setLabel("fileN", "fileN"); // ,or label without square brackets
module.exports = k;

// someFile.js. require global.js
const G = require("path/to/global").label("folder");
let fileA = G.appendLabel("fileA");
let fileB = G.setLabel("fileB", ["fileB"]).appendLabel("fileB"); // ,or set and append label here
...
let fileN = G.appendLabel("fileN");
```

not recommended if the problem is this...

```js
// someFile.js
let fileA = "./fileA";
let fileB = "../fileB";
...
let fileN = "./fileN";
```

## Usage

Specifically use **require("kizazi").fs** for filesystem, else use **require("kizazi")** for JSON Object.

```js
//access value
fileA.link; // require(fileA.link); to access contents of file
// => "A/A/A/A"
```

```js
//define tree as Object example
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
console.log(G.getTree);
// => current tree Object or path

console.log(G.getGeneration);
// => ["folderA", "folderA", "folderA", "fileA"];

//append generations
k.generation('folderA', 'folderA', 'folderA');
G.appendGeneration('fileA');
console.log(G.getGeneration);
// => ["folderA", "folderA", "folderA", "fileA"];

//append labels
k.setLabel("folder", ["folderA", "folderA", "folderA"]);
k.setLabel("fileA", ["fileA"]);
G.label("folder").appendLabel("fileA");
console.log(G.getGeneration);
// => ["folderA", "folderA", "folderA", "fileA"];

console.log(G.original);
// => folderA

console.log(G.parent);
// => ["folderA", "folderA", "folderA"];

console.log(G.child);
// => fileA

console.log(G.link);
// => "A/A/A/A";
```
