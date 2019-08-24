'use strict';
const kizazi = require('..');
const { expect } = require('chai');
const { folder, gen, value } = require('.');

describe('Using fs as tree', () => {
    //set tree
    //set and use label
    beforeEach(() => kizazi.setTree(folder).setLabel('folder', gen).label('folder'));

    it('Should return tree as folder', () => {
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