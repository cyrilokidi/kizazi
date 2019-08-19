# Kizazi

A simple variable mapper.

Access variables like they are global variables using minimal setup.

> Kizazi is a swahili word meaning _generation_ or _lieage_.
> This package draws inspiration from analogy of a _family generation tree_ and their relationship.

## Installation

> npm i kizazi

## Usage

```javascript

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

```javascript
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

- Kizazi is not used to search for variables, but rather map variables (known location or else will throw errors).

- **Generation** accepts two or more parameters (analogy: a single person doesn't represent an entire generation).

- Function _instanceName_.**link** has to be called in order to _access_ child value.

**Tree** object could also be defined as a default.
Define default tree object in [config](config.js "Default tree map object.")
