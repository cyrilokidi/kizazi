'use strict';
const kizazi = require('..').fs;
const { expect } = require('chai');
const { gen, genA, genB } = require('.');

describe('Append labels', () => {
    //set folder with genA
    beforeEach(() => kizazi.setLabel('folder', genA).setLabel('fileA', ['fileA']).label('folder'));

    it('Should return generation as genA', () => {
        const test = kizazi.getGeneration;
        expect(test, 'Generation is genA').to.deep.equal(genA);
    });

    it('Should return generation as genA + genB', () => {
        const test = kizazi.appendLabel('fileA').getGeneration;
        expect(test, 'Generation is gen').to.deep.equal(gen);
    });
});