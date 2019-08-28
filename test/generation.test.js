'use strict';
const kizazi = require('..');
const k = new kizazi();
const { expect } = require('chai');
const { gen, override } = require('.');

describe('Use generation directly.', () => {
  beforeEach(() => k.setLabel('folder', gen));

  it('Should return current generation as gen.', () => {
    const test = k.label('folder').getGeneration;
    expect(test, 'Generation is not null.').to.not.be.null;
    expect(test, 'Generation is not undefined.').to.not.be.undefined;
    expect(test, 'Generation is an array.').to.be.an('array');
    expect(test, 'Generation is equivalent to gen.').to.deep.equal(gen);
    expect(test, 'Generation is equal gen members.').to.include.members(gen);
  });

  it('Should return current generation as override.', () => {
    const test = k.label('folder').generation(override).getGeneration;
    expect(test, 'Generation is not null.').to.not.be.null;
    expect(test, 'Generation is not undefined.').to.not.be.undefined;
    expect(test, 'Generation is an array.').to.be.an('array');
    expect(test, 'Generation is override').to.deep.equal(override);
    expect(test, 'Generation is equal override.').to.include.members(override);
  });
});
