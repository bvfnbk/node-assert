import mocha from 'mocha';
import chai from 'chai';
import {ObjectAssert} from '../src/node-assert/index.mjs';
import {core} from './mocks.js';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('ObjectAssert', () => {
  it('Constructor asserts type.', () => {
    // When
    new ObjectAssert(core, {});

    // Then
    expect(core.assertObject.calledWith({})).to.be.true;
  });
});
