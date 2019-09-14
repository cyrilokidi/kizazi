'use strict';
const { fs, path, value } = require('.');
const kizazi = require('..');
require('chai').should();

describe('Main class', () => {
  describe('Appending path', () => {
    it('.mod == value', () => {
      const K = new kizazi(fs);
      const TEST = require(K.app(path).mod);
      TEST.should.not.be.a('null', '[TEST] != null');
      TEST.should.not.be.a('undefined', '[TEST] != undefined');
      TEST.should.be.equal(value, '[TEST] == value');
    });
  });

  describe('Using labels', () => {
    describe('Using .setLabel', () => {
      it('.mod == value', () => {
        const K = new kizazi(fs);
        K.setLabel('label', path);
        const TEST = require(K.label('label').mod);
        TEST.should.not.be.a('null', '[TEST] != null');
        TEST.should.not.be.a('undefined', '[TEST] != undefined');
        TEST.should.be.equal(value, '[TEST] == value');
      });
    });

    describe('Using .setLabelMany', () => {
      it('.mod == value', () => {
        const K = new kizazi(fs);
        K.setLabel('label', path);
        K.setLabelMany({ label: path });
        const TEST = require(K.label('label').mod);
        TEST.should.not.be.a('null', '[TEST] != null');
        TEST.should.not.be.a('undefined', '[TEST] != undefined');
        TEST.should.be.equal(value, '[TEST] == value');
      });
    });
  });
});
