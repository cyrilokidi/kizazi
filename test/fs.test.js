'use strict';
const kizazi = require('..').fs;
const { expect } = require('chai');
const { folder, gen, value } = require('.');

describe('Using fs as tree', () => {
    //set tree
    //set and use label
    beforeEach(() => kizazi.setTree(folder).setLabel('label', gen).label('label'));

    it('Should return current tree as tree object', () => {
        const test = kizazi.getTree;
        expect(test, 'Tree is not null').to.not.be.null;
        expect(test, 'Test is not undefined').to.not.be.undefined;
        expect(test, 'Tree is equal to current tree').to.be.equal(folder);
    });

    it('Should return value', () => {
        const test = require(kizazi.link);
        expect(test, 'Test is value').to.be.equal(value);
    });
});