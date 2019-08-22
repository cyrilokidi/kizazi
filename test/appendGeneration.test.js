'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { gen, genA, genB } = require('.');

describe('Append generations', () => {
    //set generation
    before(() => kizazi.generation(genA));

    it('Should return genA as current generation', () => {
        const test = kizazi.getGeneration;
        expect(test, 'Generation is genA').to.deep.equal(genA);
    });

    describe('Append genB to genA', () => {
        before(() => kizazi.appendGeneration(genB));

        it('Should return gen as current generation', () => {
            const test = kizazi.getGeneration;
            expect(test, 'Generation is gen').to.deep.equal(gen);
        });
    });
});