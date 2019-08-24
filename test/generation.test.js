'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { gen } = require('.');

describe('Inspect generation', () => {
    //set generation as gen
    beforeEach(() => kizazi.generation(gen));

    it('Should return generation', () => {
        const test = kizazi.getGeneration;

        expect(test, 'Generation is not null').to.not.be.null;
        expect(test, 'Generation is not undefinded').to.not.be.undefined;
        expect(test, 'Generation is an array').to.be.an('array');
        expect(test, 'Generation is gen').to.deep.equal(gen);
        expect(test, 'Generation length is [gen.length]').to.length(gen.length);
    });
});