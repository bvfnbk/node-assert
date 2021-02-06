import mocha from 'mocha';
import chai from 'chai';
import {Assert, GenericAssert, StringAssert} from '../src/node-assert/index.mjs';
import {NullArgumentError, TypeConstraintError, UndefinedArgumentError} from '../src/node-assert/error/index.mjs';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('GenericAssert', () => {
  describe('isDefined()', () => {
    it('throws undefined argument error if given an undefined value.', () => {
      let genericAssert = Assert.that();
      expect(() => genericAssert.isDefined()).to.throw(UndefinedArgumentError);
    });

    it('throws undefined argument error if given undefined.', () => {
      let genericAssert = Assert.that(undefined);
      expect(() => genericAssert.isDefined()).to.throw(UndefinedArgumentError);
    });

    it('returns a generic assert if it succeeds.', () => {
      let genericAssert = Assert.that('value');
      expect(genericAssert.isDefined()).to.be.instanceof(GenericAssert);
    });
  });

  describe('isNotNull()', () => {
    it('throws undefined argument error if given an undefined value.', () => {
      let genericAssert = Assert.that();
      expect(() => genericAssert.isNotNull()).to.throw(UndefinedArgumentError);
    });

    it('throws undefined argument error if given undefined.', () => {
      let genericAssert = Assert.that(undefined);
      expect(() => genericAssert.isNotNull()).to.throw(UndefinedArgumentError);
    });

    it('throws null argument error if given null.', () => {
      let genericAssert = Assert.that(null);
      expect(() => genericAssert.isNotNull()).to.throw(NullArgumentError);
    });

    it('returns a generic assert if it succeeds.', () => {
      let genericAssert = Assert.that('value');
      expect(genericAssert.isNotNull()).to.be.instanceof(GenericAssert);
    });
  });

  describe('isString()', () => {
    it('throws undefined argument error if given an undefined value.', () => {
      let genericAssert = Assert.that();
      expect(() => genericAssert.isString()).to.throw(UndefinedArgumentError);
    });

    it('throws undefined argument error if given undefined.', () => {
      let genericAssert = Assert.that(undefined);
      expect(() => genericAssert.isString()).to.throw(UndefinedArgumentError);
    });

    it('throws null argument error if given null.', () => {
      let genericAssert = Assert.that(null);
      expect(() => genericAssert.isString()).to.throw(NullArgumentError);
    });

    it('throws type constraint error if given number.', () => {
      let genericAssert = Assert.that(123);
      expect(() => genericAssert.isString()).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given list.', () => {
      let genericAssert = Assert.that([]);
      expect(() => genericAssert.isString()).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given object.', () => {
      let genericAssert = Assert.that({});
      expect(() => genericAssert.isString()).to.throw(TypeConstraintError);
    });

    it('throws type constraint error if given function.', () => {
      let genericAssert = Assert.that(() => {
      });
      expect(() => genericAssert.isString()).to.throw(TypeConstraintError);
    });

    it('returns a isString assert if it succeeds.', () => {
      let genericAssert = Assert.that('value');
      expect(genericAssert.isString()).to.be.instanceof(StringAssert);
    });
  });
});
