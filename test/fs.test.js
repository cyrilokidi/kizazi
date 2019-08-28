'use strict';
const { folder, gen, value } = require('.');
const kizazi = require('..');
const k = new kizazi(folder);
const { expect } = require('chai');

describe('Using fs path as tree.', () => {
  beforeEach(() => k.setLabel('folder', gen).label('folder'));

  it('Should return link as value.', () => {
    const test = require(k.append('file').link);
    expect(test, 'Value is not null.').to.not.be.null;
    expect(test, 'Value is not undefined.').to.not.be.undefined;
    expect(test, 'Value is equal to value.').to.be.equal(value);
  });
});
