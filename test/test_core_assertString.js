import mocha from 'mocha';
import chai from 'chai';

import {assertString} from '../src/node-assert/core.mjs';
import {NullArgumentError, TypeConstraintError, UndefinedArgumentError} from '../src/node-assert/error/index.mjs';

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('Core -> assertString()', () => {
  const actualAssert = assertString;
  [
    ['none', () => actualAssert(), UndefinedArgumentError],
    ['undefined', () => actualAssert(undefined), UndefinedArgumentError],
    ['null', () => actualAssert(null), NullArgumentError],
    ['object', () => actualAssert({}), TypeConstraintError],
    ['number', () => actualAssert(1), TypeConstraintError],
    ['list', () => actualAssert([]), TypeConstraintError],
    ['function', () => actualAssert(() => {
    }), TypeConstraintError]
  ].forEach(([type, closure, error]) => {
    it(`throws error if called with ${type} parameter`, () => {
      expect(closure).to.throw(error);
    });
  });

  it('does not throw if given string.', () => {
    expect(() => assertString('1')).not.to.throw();
  });
});
