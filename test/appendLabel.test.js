'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { gen, genA, genB } = require('.');

describe('Append labels', () => {
    //set labelA with genA
    beforeEach(() => kizazi.setLabel('labelA', genA));

    it('Should return generation as genA', () => {
        kizazi.label('labelA');
        const test = kizazi.getGeneration;
        expect(test, 'Generation is genA').to.deep.equal(genA);
    });

    it('Should return gen as current generation after appending labelB', () => {
        kizazi.label('labelA');
        const test = kizazi.setLabel('labelB', genB).appendLabel('labelA', 'labelB').label('labelA').getGeneration;
        expect(test, 'Generation is gen').to.deep.equal(gen);
    });
});