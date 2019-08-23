'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { gen, genA, genB } = require('.');

describe('Append generations', () => {
    //set generation as genA
    beforeEach(() => kizazi.generation(genA));

    it('Should return genA as current generation', () => {
        const test = kizazi.getGeneration;
        expect(test, 'Generation is genA').to.deep.equal(genA);
    });

    it('Should return gen as current generation after appending to genA', () => {
        const test = kizazi.appendGeneration(genB).getGeneration;
        expect(test, 'Generation is gen').to.deep.equal(gen);
    });
});