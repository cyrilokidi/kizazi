# Kizazi

[![Build Status](https://travis-ci.org/cyrilokidi/kizazi.svg?branch=master)](https://travis-ci.org/cyrilokidi/kizazi)

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
k.setLabel('module1', '/path/to/module');
k.setLabel('module2', '/path/to/module');
...
k.setLabel('moduleN', '/path/to/module');

module.exports = k;
```

Require **global.js** file in file for use.

```js
// someFile.js
let G = require('/path/to/global.js');
let module1 = G.label('module1').val;
let module2 = G.label('module2').val;
...

// someOtherFile.js
let G = require('/path/to/global.js');
let module1 = G.label('module1').val;
let module2 = G.label('module2').val;
...
```

> Access module path using **.path**, instead of **.val**

```js
let module1 = G.label('modal').path;
//=> /path/to/module1
```

## Addition

```js
//set multiple labels
k.setLabelMany({
  module1: '/path/to/module',
  module2: '/path/to/module',
  ...
  moduleN: '/path/to/module'
});

//append path to existing path
G.label('module1').app('/path/extension');
G.app('/path/to/module');
```
