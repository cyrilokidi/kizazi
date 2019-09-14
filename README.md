# Kizazi

A simple module mapping library.

> Please refer to [kizazi-legacy](https://github.com/cyrilokidi/kizazi-legacy) for version <2.x

## Installation

```shell
$ npm i kizazi
```

Run test

```shell
$ npm test
```

## Usage

Create **_global_** file and configure your module map.

```js
// global.js
const k = require('kizazi');
const root = __dirname;

//set root
k.setRoot(root);

//use labels to map module(s)
//first parameter is label name, last is module path.
k.setLabel('label', 'path/to/module');
k.setLabel('label1', 'path/to/module');
...
k.setLabel('labelN', 'path/to/module');

module.exports = k;
```

Require **global.js** file in file for use.

```js
// someFile.js
let G = require('path/to/global.js');
let file = require(G.label('label').mod);
let file1 = require(G.label('label1').mod);
...

// someOtherFile.js
let G = require('path/to/global.js');
let file = require(G.label('label').mod);
let file1 = require(G.label('label1').mod);
...
```

## Addition

```js
//set multiple labels
k.setLabelMany({
  label: 'path/to/module',
  label1: 'path/to/module',
  ...
  labelN: 'path/to/module'
});
```
