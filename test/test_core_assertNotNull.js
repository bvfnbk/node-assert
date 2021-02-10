import mocha from 'mocha';
import chai from 'chai';

import {assertNotNull} from '../src/node-assert/core.mjs';
import {NullArgumentError, UndefinedArgumentError} from '../src/node-assert/error/index.mjs';

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('Core -> assertNotNull()', () => {
  it('throws error if called with invalid or none parameters..', () => {
    expect(() => assertNotNull()).to.throw(UndefinedArgumentError);
    expect(() => assertNotNull(undefined)).to.throw(UndefinedArgumentError);
    expect(() => assertNotNull(null)).to.throw(NullArgumentError);
  });

  it('does not throw if given something.', () => {
    expect(() => assertNotNull(1)).not.to.throw();
    expect(() => assertNotNull('1')).not.to.throw();
    expect(() => assertNotNull([])).not.to.throw();
    expect(() => assertNotNull({})).not.to.throw();
    expect(() => assertNotNull(() => {
    })).not.to.throw();
  });
});
