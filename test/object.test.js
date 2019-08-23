'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { object, gen, value } = require('.');

//using json object as tree
describe('Using Object as tree', () => {
    //set tree
    //set and use label
    beforeEach(() => kizazi.setTree(object).setLabel('label', gen).label('label'));

    it('Should return current tree object', () => {
        const test = kizazi.getTree;
        expect(test, 'Tree is not null').to.not.be.null;
        expect(test, 'Tree is not undefined').to.not.be.undefined;
        expect(test, 'Tree is an object').to.be.an('object');
        expect(test, 'Tree is equal to current tree').to.be.equal(object);
    });

    it('Should return current generation', () => {
        const test = kizazi.getGeneration;
        expect(test, 'Generation is not null').to.not.be.null;
        expect(test, 'Generation is not undefinded').to.not.be.undefined;
        expect(test, 'Generation is an array').to.be.an('array');
        expect(test, 'Generation is gen').to.deep.equal(gen);
    });

    it('Should return current original', () => {
        const test = kizazi.original;
        expect(test, 'Original is not null').to.not.be.null;
        expect(test, 'Original is not undefined').to.not.be.undefined;
        expect(test, 'Original is gen[0]').to.be.equal(gen[0]);
        expect(test, 'Original is string').to.be.string;
    });

    it('Should return current parent', () => {
        const test = kizazi.parent;
        expect(test, 'Parent is not null').to.not.be.null;
        expect(test, 'Parent is not undefined').to.not.be.undefined;
        expect(test, 'Parent is an array').to.be.an('array');
        expect(test, 'Parent is gen[0, gen.length - 1]').to.deep.equal(gen.slice(0, gen.length - 1));
    });

    it('Should return current child', () => {
        const test = kizazi.child;
        expect(test, 'Child is not null').to.not.be.null;
        expect(test, 'Child is not undefined').to.not.be.undefined;
        expect(test, 'Child is string').to.be.string;
        expect(test, 'Child is gen[gen.length - 1]').to.be.equal(gen[gen.length - 1]);
    });

    it('Should return value', () => {
        const test = kizazi.link;
        expect(test, 'Test is value').to.be.equal(value);
    });
});