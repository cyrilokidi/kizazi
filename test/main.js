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
        K.setLabelMany({ label: path, labelB: path });
        const TEST = require(K.label('label').mod);
        TEST.should.not.be.a('null', '[TEST] != null');
        TEST.should.not.be.a('undefined', '[TEST] != undefined');
        TEST.should.be.equal(value, '[TEST] == value');

        const TESTB = require(K.label('labelB').mod);
        TESTB.should.not.be.a('null', '[TESTB] != null');
        TESTB.should.not.be.a('undefined', '[TESTB] != undefined');
        TESTB.should.be.equal(value, '[TESTB] == value');
      });
    });
  });
});
