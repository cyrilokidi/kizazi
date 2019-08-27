'use strict';
const kizazi = require('..').obj;
const { expect } = require('chai');
const { obj, gen, value } = require('.');

//using json object as tree
describe('Using Object as tree', () => {
  //set tree
  //set and use label
  beforeEach(() =>
    kizazi
      .setTree(obj)
      .setLabel('folder', gen)
      .label('folder')
  );

  it('Should return current tree as object', () => {
    const test = kizazi.getTree;
    expect(test, 'Tree is not null').to.not.be.null;
    expect(test, 'Tree is not undefined').to.not.be.undefined;
    expect(test, 'Tree is an object').to.be.an('object');
    expect(test, 'Tree is equal to current tree').to.be.equal(obj);
  });

  it('Should return value', () => {
    const test = kizazi.link;
    expect(test, 'Test is value').to.be.equal(value);
  });
});
