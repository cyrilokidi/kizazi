'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { gen, genA, genB } = require('.');

describe('Merge labels', () => {
  //set generation as genA
  beforeEach(() => kizazi.setLabel('folder', genA).setLabel('fileA', genB));

  it('Should return generation as genA', () => {
    const test = kizazi.label('folder').getGeneration;
    expect(test, 'Generation is genA').to.deep.equal(genA);
  });

  it('Should return generation as genA + genB', () => {
    const test = kizazi.merge('folder', 'fileA').label('folder').getGeneration;
    expect(test, 'Generation is gen').to.deep.equal(gen);
  });
});
