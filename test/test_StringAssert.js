import mocha from 'mocha';
import chai from 'chai';
import {Assert, StringAssert} from '../src/node-assert/index.mjs';
import {IllegalArgumentError} from '../src/node-assert/error/index.mjs';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('StringAssert', () => {
  describe('notBlank()', () => {
    it('throws illegal argument error when given an empty string', () => {
      expect(() => Assert.that('').string().notBlank()).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error when given string contains only tab', () => {
      expect(() => Assert.that('\t').string().notBlank()).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error when given string contains only newline', () => {
      expect(() => Assert.that('\n').string().notBlank()).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error when given string contains only spaces', () => {
      expect(() => Assert.that(' ').string().notBlank()).to.throw(IllegalArgumentError);
    });

    it('returns a string assert if it succeeds', () => {
      expect(Assert.that('value').string().notBlank()).to.be.instanceof(StringAssert);
    });
  });

  describe('notEmpty()', () => {
    it('throws illegal argument error when given an empty string', () => {
      expect(() => Assert.that('').string().notEmpty()).to.throw(IllegalArgumentError);
    });

    it('returns a string assert if given a tab', () => {
      expect(Assert.that('\t').string().notEmpty()).to.be.instanceof(StringAssert);
    });

    it('returns a string assert if given a newline', () => {
      expect(Assert.that('\t').string().notEmpty()).to.be.instanceof(StringAssert);
    });

    it('returns a string assert if given a space', () => {
      expect(Assert.that(' ').string().notEmpty()).to.be.instanceof(StringAssert);
    });

    it('returns a string assert if given a string', () => {
      expect(Assert.that('astring').string().notEmpty()).to.be.instanceof(StringAssert);
    });
  });
});
