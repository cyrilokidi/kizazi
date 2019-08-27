# Kizazi

A simple module mapping library.

## Installation

```shell
$ npm i kizazi
```

Run test

```shell
$ npm test
```

## Usage

Specifically use **require("kizazi").obj** for JSON Object as tree, else use **require("kizazi")**.

Create **global.js** file and configure your module map (custom file name allowed).

```js
// global.js
const k = require('kizazi');
const tree = __dirname;

//set tree(project root).
k.setTree(tree);

//use labels to map module(s)
k.setLabel('folder', ['folder', 'folder', 'folder']); // === /folder/folder/folder
k.setLabel('folderB', ['folderB']);

module.exports = k;
```

Require **global.js** file in file for use.

```js
// someFile.js
let G = require('path/to/global.js');
let file = G.label('folder').append('file'); // === /folder/folder/folder/file
let fileB = G.label('folderB').append('folder', 'fileB');
...

// someOtherFile.js
let G = require('path/to/global.js');
let file = G.label('folder').append('file');
let fileB = G.label('folderB').append('folder', 'fileB');
...
```

Using JSON Object as tree.

```js
const tree = {
  folder: {
    folder: {
      folder: {
        file: 'file',
      },
    },
  },
  folderB: {
    folder: {
      fileB: 'fileB',
    },
  },
};
```

Accessing module value.

```js
file.link;
// => 'file'
```

## Addition

```js
//set multiple labels
k.setLabelMany({
  folder: ['folder', 'folder', 'folder'],
  folderB: ['folderB'],
});

//merge labels
k.setLabelMany({
  folder: ['folder', 'folder', 'folder'],
  file: ['file'],
});
G.merge('folder', 'file');
G.label('folder'); //remember to select label after
// => ['folder', 'folder', 'folder', 'file']

//must i use append/merge all the time? No.
k.setLabel('file', ['folder', 'folder', 'folder', 'file']);
// => ['folder', 'folder', 'folder', 'file']
// or G.generation('folder', 'folder', 'folder', 'file');

//override generation.
G.generation('folder', 'folder', 'folder', 'folder', 'file');
// => ['folder', 'folder', 'folder', 'folder', 'file']
```
