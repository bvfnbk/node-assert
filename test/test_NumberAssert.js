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
    let reference = 100;
    let numberAssert = Assert.that(reference).isNumber();
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
      expect(() => numberAssert.isGreaterThan(() => {
      })).to.throw(TypeConstraintError);
    });

    it('throws illegal argument error if given value is equal to reference value', () => {
      expect(() => numberAssert.isGreaterThan(reference)).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error if given value is greater than reference value', () => {
      expect(() => numberAssert.isGreaterThan(reference + 1)).to.throw(IllegalArgumentError);
    });

    it('returns a number assert if given a number which is smaller than the reference value', () => {
      expect(numberAssert.isGreaterThan(reference - 1)).to.be.instanceof(NumberAssert);
    });
  });

  describe('isGreaterThanOrEquals()', () => {
    let reference = 100;
    let numberAssert = Assert.that(reference).isNumber();
    it('throws undefined argument error if given an undefined value.', () => {
      expect(() => numberAssert.isGreaterThanOrEquals()).to.throw(UndefinedArgumentError);
    });

    it('throws undefined argument error if given undefined.', () => {
      expect(() => numberAssert.isGreaterThanOrEquals(undefined)).to.throw(UndefinedArgumentError);
    });

    it('throws null argument error if given null.', () => {
      expect(() => numberAssert.isGreaterThanOrEquals(null)).to.throw(NullArgumentError);
    });

    it('throws type constraint error if given string.', () => {
      expect(() => numberAssert.isGreaterThanOrEquals('123')).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given list.', () => {
      expect(() => numberAssert.isGreaterThanOrEquals([])).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given object.', () => {
      expect(() => numberAssert.isGreaterThanOrEquals({})).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given function.', () => {
      expect(() => numberAssert.isGreaterThanOrEquals(() => {
      })).to.throw(TypeConstraintError);
    });

    it('throws illegal argument error if given value is greater than reference value', () => {
      expect(() => numberAssert.isGreaterThanOrEquals(reference + 1)).to.throw(IllegalArgumentError);
    });

    it('returns a number assert if given a number which is smaller than the reference value', () => {
      expect(numberAssert.isGreaterThanOrEquals(reference - 1)).to.be.instanceof(NumberAssert);
    });

    it('returns a number assert if given a number which is equals to the reference value', () => {
      expect(numberAssert.isGreaterThanOrEquals(reference)).to.be.instanceof(NumberAssert);
    });
  });

  describe('isLowerThan()', () => {
    let reference = 100;
    let numberAssert = Assert.that(reference).isNumber();
    it('throws undefined argument error if given an undefined value.', () => {
      expect(() => numberAssert.isLowerThan()).to.throw(UndefinedArgumentError);
    });

    it('throws undefined argument error if given undefined.', () => {
      expect(() => numberAssert.isLowerThan(undefined)).to.throw(UndefinedArgumentError);
    });

    it('throws null argument error if given null.', () => {
      expect(() => numberAssert.isLowerThan(null)).to.throw(NullArgumentError);
    });

    it('throws type constraint error if given string.', () => {
      expect(() => numberAssert.isLowerThan('123')).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given list.', () => {
      expect(() => numberAssert.isLowerThan([])).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given object.', () => {
      expect(() => numberAssert.isLowerThan({})).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given function.', () => {
      expect(() => numberAssert.isLowerThan(() => {
      })).to.throw(TypeConstraintError);
    });

    it('throws illegal argument error if given value is equal to reference value', () => {
      expect(() => numberAssert.isLowerThan(reference)).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error if given value is lower than reference value', () => {
      expect(() => numberAssert.isLowerThan(reference - 1)).to.throw(IllegalArgumentError);
    });

    it('returns a number assert if given a number which is greater than the reference value', () => {
      expect(numberAssert.isLowerThan(reference + 1)).to.be.instanceof(NumberAssert);
    });
  });

  describe('isLowerThanOrEquals()', () => {
    let reference = 100;
    let numberAssert = Assert.that(reference).isNumber();
    it('throws undefined argument error if given an undefined value.', () => {
      expect(() => numberAssert.isLowerThanOrEquals()).to.throw(UndefinedArgumentError);
    });

    it('throws undefined argument error if given undefined.', () => {
      expect(() => numberAssert.isLowerThanOrEquals(undefined)).to.throw(UndefinedArgumentError);
    });

    it('throws null argument error if given null.', () => {
      expect(() => numberAssert.isLowerThanOrEquals(null)).to.throw(NullArgumentError);
    });

    it('throws type constraint error if given string.', () => {
      expect(() => numberAssert.isLowerThanOrEquals('123')).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given list.', () => {
      expect(() => numberAssert.isLowerThanOrEquals([])).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given object.', () => {
      expect(() => numberAssert.isLowerThanOrEquals({})).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given function.', () => {
      expect(() => numberAssert.isLowerThanOrEquals(() => {
      })).to.throw(TypeConstraintError);
    });

    it('throws illegal argument error if given value is lower than reference value', () => {
      expect(() => numberAssert.isLowerThanOrEquals(reference - 1)).to.throw(IllegalArgumentError);
    });

    it('returns a number assert if given a number which is equal to the reference value', () => {
      expect(numberAssert.isLowerThanOrEquals(reference)).to.be.instanceof(NumberAssert);
    });

    it('returns a number assert if given a number which is greater than the reference value', () => {
      expect(numberAssert.isLowerThanOrEquals(reference + 1)).to.be.instanceof(NumberAssert);
    });
  });

  describe('equals()', () => {
    let reference = 100;
    let numberAssert = Assert.that(reference).isNumber();
    it('throws undefined argument error if given an undefined value.', () => {
      expect(() => numberAssert.equals()).to.throw(UndefinedArgumentError);
    });

    it('throws undefined argument error if given undefined.', () => {
      expect(() => numberAssert.equals(undefined)).to.throw(UndefinedArgumentError);
    });

    it('throws null argument error if given null.', () => {
      expect(() => numberAssert.equals(null)).to.throw(NullArgumentError);
    });

    it('throws type constraint error if given string.', () => {
      expect(() => numberAssert.equals('123')).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given list.', () => {
      expect(() => numberAssert.equals([])).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given object.', () => {
      expect(() => numberAssert.equals({})).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given function.', () => {
      expect(() => numberAssert.equals(() => {
      })).to.throw(TypeConstraintError);
    });

    it('throws illegal argument error if given value is greater than the reference value', () => {
      expect(() => numberAssert.equals(reference + 1)).to.throw(IllegalArgumentError);
    });

    it('throws illegal argument error if given value is lower than reference value', () => {
      expect(() => numberAssert.equals(reference - 1)).to.throw(IllegalArgumentError);
    });

    it('returns a number assert if given a number which is equal to the reference value', () => {
      expect(numberAssert.equals(reference)).to.be.instanceof(NumberAssert);
    });
  });
});
