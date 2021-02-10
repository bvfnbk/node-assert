import mocha from 'mocha';
import chai from 'chai';

import {assertList} from '../src/node-assert/core.mjs';
import {NullArgumentError, TypeConstraintError, UndefinedArgumentError} from '../src/node-assert/error/index.mjs';

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('Core -> assertList()', () => {
  it('throws error if called with invalid or none parameters..', () => {
    expect(() => assertList()).to.throw(UndefinedArgumentError);
    expect(() => assertList(undefined)).to.throw(UndefinedArgumentError);
    expect(() => assertList(null)).to.throw(NullArgumentError);
    expect(() => assertList('1')).to.throw(TypeConstraintError);
    expect(() => assertList(1)).to.throw(TypeConstraintError);
    expect(() => assertList({})).to.throw(TypeConstraintError);
    expect(() => assertList(() => {
    })).to.throw(TypeConstraintError);
  });

  it('does not throw if given list.', () => {
    expect(() => assertList([])).not.to.throw();
  });
});
