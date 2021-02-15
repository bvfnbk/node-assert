import mocha from 'mocha';
import chai from 'chai';
import {ObjectAssert} from '../src/node-assert/index.mjs';
import {core} from './mocks.js';
import {PropertyError} from '../src/node-assert/error/index.mjs';


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

  describe('hasProperty()', () => {

    it('returns an object assert for contained properties', () => {
      // Given
      const value = {'key': 'value'};
      const systemUnderTest = new ObjectAssert(core, value);
      let requestedProperty = 'key';

      // When
      const actual = systemUnderTest.hasProperty(requestedProperty);

      // Then
      expect(actual).to.be.instanceof(ObjectAssert);
      expect(core.assertString.calledWith(requestedProperty)).to.be.true;
    });

    it('throws property error if object does not contain property', () => {
      // Given
      const value = {'key': 'value'};
      const systemUnderTest = new ObjectAssert(core, value);
      let unknownProperty = 'unknown';

      // When/Then
      expect(() => systemUnderTest.hasProperty(unknownProperty)).to.throw(PropertyError);
      expect(core.assertString.calledWith(unknownProperty)).to.be.true;
    });
  });
});
