'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { folder, value } = require('.');

describe('Using fs path as tree.', () => {
  beforeEach(() => kizazi.setTree(folder).label('folder'));

  it('Should return link as value.', () => {
    const test = require(kizazi.append('file').link);
    expect(test, 'Value is not null.').to.not.be.null;
    expect(test, 'Value is not undefined.').to.not.be.undefined;
    expect(test, 'Value is equal to value.').to.be.equal(value);
  });
});
