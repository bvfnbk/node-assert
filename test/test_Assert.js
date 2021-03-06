import mocha from 'mocha';
import chai from 'chai';
import {Assert, GenericAssert} from '../src/node-assert/index.mjs';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('Assert', () => {
  describe('that()', () => {
    it('returns a generic assert instance', () => {
      expect(Assert.that(123)).to.be.an.instanceof(GenericAssert);
    });
  });
});
