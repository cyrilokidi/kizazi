'use strict';
const kizazi = require('..').fs;
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
    });

    it('Should original', () => {
        const test = kizazi.original;
        expect(test, 'Original is not null').to.not.be.null;
        expect(test, 'Original is not undefined').to.not.be.undefined;
        expect(test, 'Original is gen[0]').to.be.equal(gen[0]);
        expect(test, 'Original is string').to.be.string;
    });

    it('Should return parent', () => {
        const test = kizazi.parent;
        expect(test, 'Parent is not null').to.not.be.null;
        expect(test, 'Parent is not undefined').to.not.be.undefined;
        expect(test, 'Parent is an array').to.be.an('array');
        expect(test, 'Parent is gen[0, gen.length - 1]').to.deep.equal(gen.slice(0, gen.length - 1));
    });

    it('Should return child', () => {
        const test = kizazi.child;
        expect(test, 'Child is not null').to.not.be.null;
        expect(test, 'Child is not undefined').to.not.be.undefined;
        expect(test, 'Child is string').to.be.string;
        expect(test, 'Child is gen[gen.length - 1]').to.be.equal(gen[gen.length - 1]);
    });
});