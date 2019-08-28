'use strict';
const kizazi = require('..');
const k = new kizazi();
const { expect } = require('chai');
const { gen, file, fileB } = require('.');

describe('Merge labels.', () => {
  beforeEach(() => {
    k.setLabel('folder', gen);
    k.setLabel('file', file);
    k.setLabel('fileB', fileB);
  });

  it('Should return current generation as gen + file.', () => {
    k.merge('folder', 'file');
    const test = k.label('folder').getGeneration;
    expect(test, 'Generation is not null').to.not.be.null;
    expect(test, 'Generation is not undefined.').to.not.be.undefined;
    expect(test, 'Generation is an array.').to.be.an('array');
    expect(test, 'Generation is gen + file.').to.deep.equal(gen.concat(file));
    expect(test, 'Generation is equal gen + file members.').to.include.members(gen.concat(file));
  });

  it('Should return current generation as gen + fileB.', () => {
    k.merge('folder', 'fileB');
    const test = k.label('folder').getGeneration;
    expect(test, 'Generation is not null').to.not.be.null;
    expect(test, 'Generation is not undefined.').to.not.be.undefined;
    expect(test, 'Generation is an array.').to.be.an('array');
    expect(test, 'Generation is gen + fileB.').to.deep.equal(gen.concat(fileB));
    expect(test, 'Generation is equal gen + fileB members.').to.include.members(gen.concat(fileB));
  });
});
