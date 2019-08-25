'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { gen, genA, genB } = require('.');

describe('Append generation to current generation', () => {
  //set folder with genA
  beforeEach(() => kizazi.setLabel('folder', genA).label('folder'));

  it('Should return generation as genA', () => {
    const test = kizazi.getGeneration;
    expect(test, 'Generation is genA').to.deep.equal(genA);
  });

  it('Should return generation as genA + genB', () => {
    const test = kizazi.append(genB).getGeneration;
    expect(test, 'Generation is gen').to.deep.equal(gen);
  });
});
