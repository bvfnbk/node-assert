import mocha from 'mocha';
import chai from 'chai';
import {Assert, NumberAssert} from '../src/node-assert/index.mjs';
import {
  IllegalArgumentError,
  NullArgumentError,
  TypeConstraintError,
  UndefinedArgumentError
} from '../src/node-assert/error/index.mjs';

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('NumberAssert', () => {
  describe('isGreaterThan()', () => {
    let numberAssert = Assert.that(123).isNumber();
    it('throws undefined argument error if given an undefined value.', () => {
      expect(() => numberAssert.isGreaterThan()).to.throw(UndefinedArgumentError);
    });

    it('throws undefined argument error if given undefined.', () => {
      expect(() => numberAssert.isGreaterThan(undefined)).to.throw(UndefinedArgumentError);
    });

    it('throws null argument error if given null.', () => {
      expect(() => numberAssert.isGreaterThan(null)).to.throw(NullArgumentError);
    });

    it('throws type constraint error if given string.', () => {
      expect(() => numberAssert.isGreaterThan('123')).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given list.', () => {
      expect(() => numberAssert.isGreaterThan([])).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given object.', () => {
      expect(() => numberAssert.isGreaterThan({})).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given function.', () => {
      expect(() => numberAssert.isGreaterThan(() => {})).to.throw(TypeConstraintError);
    });

    it('throws illegal argument error if given value is equal to reference value', () => {
      expect(() => numberAssert.isGreaterThan(123)).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error if given value is greater than reference value', () => {
      expect(() => numberAssert.isGreaterThan(124)).to.throw(IllegalArgumentError);
    });

    it('returns a number assert if given a number which is smaller than the reference value', () => {
      expect(numberAssert.isGreaterThan(0)).to.be.instanceof(NumberAssert);
    });
  });
});
