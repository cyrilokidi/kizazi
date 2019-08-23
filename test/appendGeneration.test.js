'use strict';
const kizazi = require('..').fs;
const { expect } = require('chai');
const { gen, genA, genB } = require('.');

describe('Append generations', () => {
    //set generation as genA
    beforeEach(() => kizazi.generation(genA));

    it('Should return generation as genA', () => {
        const test = kizazi.getGeneration;
        expect(test, 'Generation is genA').to.deep.equal(genA);
    });

    it('Should return generation as genA + genB', () => {
        const test = kizazi.appendGeneration(genB).getGeneration;
        expect(test, 'Generation is gen').to.deep.equal(gen);
    });
});