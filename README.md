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

- Kizazi is not for searching variables, but rather map variables (known location or else may throw errors).

- **Generation** accepts two or more parameters (analogy: a single person doesn't represent an entire generation).

```js

kizazi.generation('p1', 'p2', ..., 'pN');

```

- Function _instanceName_.**link** has to be called in order to _access_ child value.

## Configuration

**Tree** object could also be defined as a default.
Define default tree object in [./node_modules/kizazi/config.js](config.js "Default tree map object.")

```js
// ./node_modules/kizazi/config.js
"use strict";

//default tree map
module.exports.tree = {};
```

## Appendix

```js
// ANALOGY::
// only one lineage can be selected.
// only a single child can be target.

let kizazi = require("kizazi");
// generation
kizazi.generation("folderA", "folderA", "folderA", "fileA");

// Generation: get current lineage set
console.log(kizazi.getGeneration);
// ['folderA', 'folderA', 'folderA', 'fileA']

// ORIGINAL: root of tree (great, great, ... grandparent)
console.log(kizazi.original);
// folderA

//PARENT: parents to the target child (may include grandparents)
console.log(kizazi.parent);
// ['folderA', 'folderA', 'folderA']

//CHILD: target child in the lineage
console.log(kizazi.child);
// fileA

//LINK: function to read value of child (child's DNA)
console.log(kizazi.link);
// fileAAAA
```

## Addition

### appendTree

Append a new tree map object to an existing tree map.

```js
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
  fileA: "fileA"
};

const branch = {
  folderB: {
    fileA: "fileBA"
  }
};

kizazi.setTree(tree);

console.log(kizazi.getTree);

// { folderA:
//    { folderA: { folderA: [Object] },
//      folderB: { folderA: [Object], fileA: 'fileABA' },
//      folderC: { fileA: 'fileACA' } },
//   fileA: 'fileA' }

kizazi.appendTree(branch);

console.log(kizazi.getTree);

// { folderA:
//    { folderA: { folderA: [Object] },
//      folderB: { folderA: [Object], fileA: 'fileABA' },
//      folderC: { fileA: 'fileACA' } },
//   fileA: 'fileA',
//   folderB: { fileA: 'fileBA' } }
```

### appendGeneration

Append generation (lineage) to current generation.

```js
// no default tree map !!
const kizazi = require("kizazi/bin");
const folderA = new kizazi();
const folderB = new kizazi();

folderA.generation("folderA", "folderA");
folderB.generation("folderA", "folderA", "folderA", "fileA");

console.log(folderA.getGeneration);
// [ 'folderA', 'folderA' ]

console.log(folderB.getGeneration);
// [ 'folderA', 'folderA', 'folderA', 'fileA' ]

folderA.appendGeneration("folderA", "fileA");

console.log(folderA.getGeneration);
// [ 'folderA', 'folderA', 'folderA', 'fileA' ]
```
