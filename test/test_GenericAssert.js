import mocha from 'mocha';
import chai from 'chai';
import {
  Assert,
  GenericAssert,
  StringAssert,
  UndefinedArgumentError,
  NullArgumentError,
  TypeConstraintError
} from '../src/index.js';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('GenericAssert', () => {
  describe('defined()', () => {
    it('throws undefined argument error if given an undefined value.', () => {
      let genericAssert = Assert.that();
      expect(() => genericAssert.defined()).to.throw(UndefinedArgumentError);
    });
    it('throws undefined argument error if given undefined.', () => {
      let genericAssert = Assert.that(undefined);
      expect(() => genericAssert.defined()).to.throw(UndefinedArgumentError);
    });

    it('returns a generic assert if it succeeds.', () => {
      let genericAssert = Assert.that('value');
      expect(genericAssert.defined()).to.be.instanceof(GenericAssert);
    });
  });

  describe('notNull()', () => {
    it('throws undefined argument error if given an undefined value.', () => {
      let genericAssert = Assert.that();
      expect(() => genericAssert.notNull()).to.throw(UndefinedArgumentError);
    });
    it('throws undefined argument error if given undefined.', () => {
      let genericAssert = Assert.that(undefined);
      expect(() => genericAssert.notNull()).to.throw(UndefinedArgumentError);
    });
    it('throws null argument error if given null.', () => {
      let genericAssert = Assert.that(null);
      expect(() => genericAssert.notNull()).to.throw(NullArgumentError);
    });

    it('returns a generic assert if it succeeds.', () => {
      let genericAssert = Assert.that('value');
      expect(genericAssert.defined()).to.be.instanceof(GenericAssert);
    });
  });

  describe('string()', () => {
    it('throws undefined argument error if given an undefined value.', () => {
      let genericAssert = Assert.that();
      expect(() => genericAssert.string()).to.throw(UndefinedArgumentError);
    });
    it('throws undefined argument error if given undefined.', () => {
      let genericAssert = Assert.that(undefined);
      expect(() => genericAssert.string()).to.throw(UndefinedArgumentError);
    });
    it('throws null argument error if given null.', () => {
      let genericAssert = Assert.that(null);
      expect(() => genericAssert.string()).to.throw(NullArgumentError);
    });
    it('throws type constraint error if given number.', () => {
      let genericAssert = Assert.that(123);
      expect(() => genericAssert.string()).to.throw(TypeConstraintError);
    });
    it('throws type constraint error if given list.', () => {
      let genericAssert = Assert.that([]);
      expect(() => genericAssert.string()).to.throw(TypeConstraintError);
    });
    it('throws type constraint error if given object.', () => {
      let genericAssert = Assert.that({});
      expect(() => genericAssert.string()).to.throw(TypeConstraintError);
    });
    it('throws type constraint error if given function.', () => {
      let genericAssert = Assert.that(() => {});
      expect(() => genericAssert.string()).to.throw(TypeConstraintError);
    });

    it('returns a string assert if it succeeds.', () => {
      let genericAssert = Assert.that('value');
      expect(genericAssert.string()).to.be.instanceof(StringAssert);
    });
  });
});
