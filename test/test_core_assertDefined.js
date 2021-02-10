import mocha from 'mocha';
import chai from 'chai';

import {assertDefined} from '../src/node-assert/core.mjs';
import {UndefinedArgumentError} from '../src/node-assert/error/index.mjs';

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('Core -> assertDefined()', () => {
  it('throws undefined error if given undefined.', () => {
    expect(() => assertDefined()).to.throw(UndefinedArgumentError);
    expect(() => assertDefined(undefined)).to.throw(UndefinedArgumentError);
  });

  it('does not throw if given something', () => {
    expect(() => assertDefined(1)).not.to.throw();
    expect(() => assertDefined('1')).not.to.throw();
    expect(() => assertDefined([])).not.to.throw();
    expect(() => assertDefined({})).not.to.throw();
    expect(() => assertDefined(() => {
    })).not.to.throw();
  });
});
