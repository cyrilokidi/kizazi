'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { gen, file, fileB, override } = require('.');

describe('Using labels.', () => {
  beforeEach(() => {
    kizazi.setLabel('folder', gen);
    kizazi.setLabel('file', file);
    kizazi.setLabel('fileB', fileB);
  });

  it('Should return current generation as gen.', () => {
    const test = kizazi.label('folder').getGeneration;
    expect(test, 'Generation is not null.').to.not.be.null;
    expect(test, 'Generation is not undefined.').to.not.be.undefined;
    expect(test, 'Generation is an array.').to.be.an('array');
    expect(test, 'Generation is equivalent to gen.').to.deep.equal(gen);
    expect(test, 'Generation is equal gen members.').to.include.members(gen);
  });

  it('Should return current generation as gen + file.', () => {
    const test = kizazi.merge('folder', 'file').label('folder').getGeneration;
    expect(test, 'Generation is not null').to.not.be.null;
    expect(test, 'Generation is not undefined.').to.not.be.undefined;
    expect(test, 'Generation is an array.').to.be.an('array');
    expect(test, 'Generation is gen + file.').to.deep.equal(gen.concat(file));
    expect(test, 'Generation is equal gen + file members.').to.include.members(gen.concat(file));
  });

  it('Should return current generation as gen + fileB.', () => {
    const test = kizazi.merge('folder', 'fileB').label('folder').getGeneration;
    expect(test, 'Generation is not null').to.not.be.null;
    expect(test, 'Generation is not undefined.').to.not.be.undefined;
    expect(test, 'Generation is an array.').to.be.an('array');
    expect(test, 'Generation is gen + fileB.').to.deep.equal(gen.concat(fileB));
    expect(test, 'Generation is equal gen + fileB members.').to.include.members(gen.concat(fileB));
  });
});
