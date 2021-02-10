import mocha from 'mocha';
import chai from 'chai';

import {assertString} from '../src/node-assert/core.mjs';
import {NullArgumentError, TypeConstraintError, UndefinedArgumentError} from '../src/node-assert/error/index.mjs';

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('Core -> assertString()', () => {
  it('throws error if called with invalid or none parameters..', () => {
    expect(() => assertString()).to.throw(UndefinedArgumentError);
    expect(() => assertString(undefined)).to.throw(UndefinedArgumentError);
    expect(() => assertString(null)).to.throw(NullArgumentError);
    expect(() => assertString(1)).to.throw(TypeConstraintError);
    expect(() => assertString([])).to.throw(TypeConstraintError);
    expect(() => assertString({})).to.throw(TypeConstraintError);
    expect(() => assertString(() => {
    })).to.throw(TypeConstraintError);
  });

  it('does not throw if given string.', () => {
    expect(() => assertString('1')).not.to.throw();
  });
});
