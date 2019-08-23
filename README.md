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

to this...

```js
// someFile.js
const G = require("path/to/global").label("folder"); // require global.js
let fileA = G.appendLabel("fileA"); // === "../../../fileA"
let fileB = G.setLabel("fileB", ["fileB"]).appendLabel("fileB"); // ,or set and append label here
...
let fileN = G.appendLabel("fileN");
```

using this (a little setup of course)...

```js
// global.js
const k = require("kizazi").fs; // ,or require("kizazi") for JSON Object
const tree = __dirname; // ,or JSON Object
k.setTree(tree); //set new tree
k.setLabel("folder", ["..", "..", ".."]); // === "../../../"
k.setLabel("fileA", ["fileA"]);
...
k.setLabel("fileN", "fileN"); // ,or label without square brackets
module.exports = k;
```

**not** recommended if the problem is this...

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
// => tree Object or path

console.log(G.getGeneration);
// => ["folderA", "folderA", "folderA", "fileA"];

//append generations (if you dont prefer labelling genration)
//NOTE: if set only that one generation will be in use
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
