import mocha from 'mocha';
import chai from 'chai';
import {Assert, StringAssert} from '../src/node-assert/index.mjs';
import {IllegalArgumentError} from '../src/node-assert/error/index.mjs';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('StringAssert', () => {
  describe('isNotBlank()', () => {
    it('throws illegal argument error when given an empty isString', () => {
      expect(() => Assert.that('').isString().isNotBlank()).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error when given isString contains only tab', () => {
      expect(() => Assert.that('\t').isString().isNotBlank()).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error when given isString contains only newline', () => {
      expect(() => Assert.that('\n').isString().isNotBlank()).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error when given isString contains only spaces', () => {
      expect(() => Assert.that(' ').isString().isNotBlank()).to.throw(IllegalArgumentError);
    });

    it('returns a string assert if it succeeds', () => {
      expect(Assert.that('value').isString().isNotBlank()).to.be.instanceof(StringAssert);
    });
  });

  describe('isNotEmpty()', () => {
    it('throws illegal argument error when given an empty string', () => {
      expect(() => Assert.that('').isString().isNotEmpty()).to.throw(IllegalArgumentError);
    });

    it('returns a string assert if given a tab', () => {
      expect(Assert.that('\t').isString().isNotEmpty()).to.be.instanceof(StringAssert);
    });

    it('returns a string assert if given a newline', () => {
      expect(Assert.that('\t').isString().isNotEmpty()).to.be.instanceof(StringAssert);
    });

    it('returns a string assert if given a space', () => {
      expect(Assert.that(' ').isString().isNotEmpty()).to.be.instanceof(StringAssert);
    });

    it('returns a string assert if given a string', () => {
      expect(Assert.that('astring').isString().isNotEmpty()).to.be.instanceof(StringAssert);
    });
  });
});
