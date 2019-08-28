'use strict';
const { obj, gen, file, value } = require('.');
const kizazi = require('..').obj;
const k = new kizazi(obj);
const { expect } = require('chai');

describe('Using object as tree', () => {
  beforeEach(() => {
    k.setLabel('folder', gen);
    k.setLabel('file', file);
    k.label('folder');
  });

  it('Should return link as value.', () => {
    const test = k.append('file').link;
    expect(test, 'Value is not null.').to.not.be.null;
    expect(test, 'Value is not undefined.').to.not.be.undefined;
    expect(test, 'Value is equal to value').to.be.equal(value);
  });
});
