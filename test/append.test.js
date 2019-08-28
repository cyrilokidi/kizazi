'use strict';
const kizazi = require('..');
const k = new kizazi();
const { expect } = require('chai');
const { gen, file } = require('.');

describe('Using append.', () => {
  beforeEach(() => k.setLabel('folder', gen));

  it('Should return current generation as folder', () => {
    const test = k.label('folder').getGeneration;
    expect(test, 'Generation is not null.').to.not.be.null;
    expect(test, 'Generation is not undefined.').to.not.be.undefined;
    expect(test, 'Generation is an array.').to.be.an('array');
    expect(test, 'Generation is equivalent to gen.').to.deep.equal(gen);
    expect(test, 'Generation is equal gen members.').to.include.members(gen);
  });

  it('Should return current generation as file', () => {
    const test = k.label('folder').generation(file).getGeneration;
    expect(test, 'Generation is not null.').to.not.be.null;
    expect(test, 'Generation is not undefined.').to.not.be.undefined;
    expect(test, 'Generation is an array.').to.be.an('array');
    expect(test, 'Generation is equivalent to file.').to.deep.equal(file);
    expect(test, 'Generation is equal file members.').to.include.members(file);
  });
});
