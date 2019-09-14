'use strict';
require('chai').should();
const kizazi = require('..');

const root = __dirname + '/data'; // root directory path
const path = '/folder/folder/folder/file'; // module path
const pathB = '/folder/folder/folder'; // module path
const value = 'Module value.'; // expected value

describe('Main class', () => {
  describe('Returning module value', () => {
    describe('Using labels', () => {
      describe('Using .setLabel', () => {
        it('.val == value', () => {
          const K = new kizazi();
          K.setRoot(root);
          K.setLabel('module1', path);
          const TEST = K.label('module1').val;
          TEST.should.not.be.a('null', '[TEST] != null');
          TEST.should.not.be.a('undefined', '[TEST] != undefined');
          TEST.should.be.equal(value, '[TEST] == value');
        });
      });

      describe('Using .setLabelMany', () => {
        it('.val == value', () => {
          const K = new kizazi();
          K.setRoot(root);
          K.setLabelMany({ module1: path, module2: path });
          const TEST = K.label('module1').val;
          TEST.should.not.be.a('null', '[TEST] != null');
          TEST.should.not.be.a('undefined', '[TEST] != undefined');
          TEST.should.be.equal(value, '[TEST] == value');

          const TESTB = K.label('module2').val;
          TESTB.should.not.be.a('null', '[TESTB] != null');
          TESTB.should.not.be.a('undefined', '[TESTB] != undefined');
          TESTB.should.be.equal(value, '[TESTB] == value');
        });
      });
    });

    describe('Appending path', () => {
      describe('Appending path to empty path.', () => {
        it('.val == value', () => {
          const K = new kizazi();
          K.setRoot(root);
          const TEST = K.app(path).val;
          TEST.should.not.be.a('null', '[TEST] != null');
          TEST.should.not.be.a('undefined', '[TEST] != undefined');
          TEST.should.be.equal(value, '[TEST] == value');
        });
      });

      describe('Appending path to label path', () => {
        it('.val == value', () => {
          const K = new kizazi();
          K.setRoot(root);
          K.setLabel('module1', pathB);
          const TEST = K.label('module1').app('/file').val;
          TEST.should.not.be.a('null', '[TEST] != null');
          TEST.should.not.be.a('undefined', '[TEST] != undefined');
          TEST.should.be.equal(value, '[TEST] == value');
        });
      });
    });
  });

  describe('Returning module path', () => {
    it('.path == root + path', () => {
      const K = new kizazi();
      K.setRoot(root);
      K.setLabel('module1', path);
      const TEST = K.label('module1').path;
      TEST.should.not.be.a('null', '[TEST] != null');
      TEST.should.not.be.a('undefined', '[TEST] != undefined');
      TEST.should.be.equal(root + path, '[TEST] == root + path');
    });
  });
});
