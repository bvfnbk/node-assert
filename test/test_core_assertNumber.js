import mocha from 'mocha';
import chai from 'chai';

import {assertNumber} from '../src/node-assert/core.mjs';
import {NullArgumentError, TypeConstraintError, UndefinedArgumentError} from '../src/node-assert/error/index.mjs';

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('Core -> assertNumber()', () => {
  it('throws error if called with invalid or none parameters..', () => {
    expect(() => assertNumber()).to.throw(UndefinedArgumentError);
    expect(() => assertNumber(undefined)).to.throw(UndefinedArgumentError);
    expect(() => assertNumber(null)).to.throw(NullArgumentError);
    expect(() => assertNumber('1')).to.throw(TypeConstraintError);
    expect(() => assertNumber([])).to.throw(TypeConstraintError);
    expect(() => assertNumber({})).to.throw(TypeConstraintError);
    expect(() => assertNumber(() => {
    })).to.throw(TypeConstraintError);
  });

  it('does not throw if given number.', () => {
    expect(() => assertNumber(1)).not.to.throw();
  });
});
