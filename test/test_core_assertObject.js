import mocha from 'mocha';
import chai from 'chai';

import {assertObject} from '../src/node-assert/core.mjs';
import {NullArgumentError, TypeConstraintError, UndefinedArgumentError} from '../src/node-assert/error/index.mjs';

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('Core -> assertObject()', () => {
  it('throws error if called with invalid or none parameters..', () => {
    expect(() => assertObject()).to.throw(UndefinedArgumentError);
    expect(() => assertObject(undefined)).to.throw(UndefinedArgumentError);
    expect(() => assertObject(null)).to.throw(NullArgumentError);
    expect(() => assertObject('1')).to.throw(TypeConstraintError);
    expect(() => assertObject(1)).to.throw(TypeConstraintError);
    expect(() => assertObject([])).to.throw(TypeConstraintError);
    expect(() => assertObject(() => {
    })).to.throw(TypeConstraintError);
  });

  it('does not throw if given list.', () => {
    expect(() => assertObject({})).not.to.throw();
  });
});
