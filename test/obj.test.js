'use strict';
const kizazi = require('..').obj;
const { expect } = require('chai');
const { obj, gen, file, value } = require('.');

describe('Using object as tree', () => {
  beforeEach(() => {
    kizazi.setTree(obj);
    kizazi.setLabel('folder', gen);
    kizazi.setLabel('file', file);
    kizazi.label('folder');
  });

  it('Should return link as value.', () => {
    const test = kizazi.append('file').link;
    expect(test, 'Value is not null.').to.not.be.null;
    expect(test, 'Value is not undefined.').to.not.be.undefined;
    expect(test, 'Value is equal to value').to.be.equal(value);
  });
});
