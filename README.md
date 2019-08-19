# Kizazi

A simple variable mapper.

Access variables like they are global variables using minimal setup.

> Kizazi is a swahili word meaning _generation_ or _lineage_.
> This package draws inspiration from analogy of a _family generation tree_ and their relationship.

## Installation

```shell
$ npm i kizazi
```

## Usage

```js

...

let kizazi = require("kizazi");

//get current tree map
console.log(kizazi.getTree);
// current tree Object

//set new tree map
kizazi.setTree(tree);

//set generation
kizazi.generation('folderA', 'folderA', 'folderA', 'fileA');

//get current generation
console.log(kizazi.getGeneration);
// ['folderA', 'folderA', 'folderA', 'fileA']

//get current original
console.log(kizazi.original);
// folderA

//get current parent
console.log(kizazi.parent);
// ['folderA', 'folderA', 'folderA']

//get current child
console.log(kizazi.child);
// fileA

//get child value
console.log(kizazi.link);
// fileAAAA

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

## Rules

- Kizazi is not used to search for variables, but rather map variables (known location or else may throw errors).

- **Generation** accepts two or more parameters (analogy: a single person doesn't represent an entire generation).

```js

kizazi.generation('p1', 'p2', ..., 'pN');

```

- Function _instanceName_.**link** has to be called in order to _access_ child value.

## Configuration

**Tree** object could also be defined as a default.
Define default tree object in [node_modules/kizazi/config.js](config.js "Default tree map object.")

```js
"use strict";

//default tree map
module.exports.tree = { default: "hello world" };
```

## Appendix

```js
// ANALOGY::
// only one lineage can be selected.
// only a single child can be target.

let kizazi = require("kizazi");
// generation
kizazi.generation("folderA", "folderA", "folderA", "fileA");

// ORIGINAL: root of tree (great, great, ... grandparent).
console.log(kizazi.getGeneration);
// ['folderA', 'folderA', 'folderA', 'fileA']

//PARENT: parents to the target child
console.log(kizazi.parent);
// ['folderA', 'folderA', 'folderA']

//CHILD: target child in the lineage
console.log(kizazi.link);
// fileAAAA
```
