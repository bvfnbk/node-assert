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

  describe('hasProperties()', () => {
    it('asserts containment for all received names (as variable arguments)...', () => {
      // Given
      const value = {
        'a': 'A',
        'b': 'B',
        'c': 'C',
        'd': 'D',
        'e': 'E',
        'f': 'F'
      };
      const systemUnderTest = new ObjectAssert(core, value);

      // When
      const actual = systemUnderTest.hasProperties('a', 'b', 'c', 'd', 'e', 'f');

      // Then
      expect(actual).to.be.instanceof(ObjectAssert);
      expect(core.assertString.calledWith('a')).to.be.true;
      expect(core.assertString.calledWith('b')).to.be.true;
      expect(core.assertString.calledWith('c')).to.be.true;
      expect(core.assertString.calledWith('d')).to.be.true;
      expect(core.assertString.calledWith('e')).to.be.true;
      expect(core.assertString.calledWith('f')).to.be.true;
    });

    it('asserts containment for all received names (as list argument)...', () => {
      // Given
      const value = {
        'g': 'A',
        'h': 'B',
        'i': 'C',
        'j': 'D',
        'k': 'E',
        'l': 'F'
      };
      const systemUnderTest = new ObjectAssert(core, value);

      // When
      const actual = systemUnderTest.hasProperties(['g', 'h', 'i', 'j', 'k', 'l']);

      // Then
      expect(actual).to.be.instanceof(ObjectAssert);
      expect(core.assertString.calledWith('g')).to.be.true;
      expect(core.assertString.calledWith('h')).to.be.true;
      expect(core.assertString.calledWith('i')).to.be.true;
      expect(core.assertString.calledWith('j')).to.be.true;
      expect(core.assertString.calledWith('k')).to.be.true;
      expect(core.assertString.calledWith('l')).to.be.true;
    });

    it('asserts containment for all received names (as list argument)...', () => {
      // Given
      const value = {
        'm': 'A',
        'n': 'B',
        'o': 'C',
        'p': 'D',
        'q': 'E',
        'r': 'F'
      };
      const systemUnderTest = new ObjectAssert(core, value);

      // When
      const actual = systemUnderTest.hasProperties('m');

      // Then
      expect(actual).to.be.instanceof(ObjectAssert);
      expect(core.assertString.calledWith('m')).to.be.true;
      expect(core.assertString.calledWith('n')).to.be.false;
      expect(core.assertString.calledWith('o')).to.be.false;
      expect(core.assertString.calledWith('p')).to.be.false;
      expect(core.assertString.calledWith('q')).to.be.false;
      expect(core.assertString.calledWith('r')).to.be.false;
    });

    it('throws property error if object does not contain a single property', () => {
      // Given
      const value = {
        's': 'S',
        't' : 'T'
      };
      const systemUnderTest = new ObjectAssert(core, value);
      let unknownProperty = 'u';

      // When/Then
      expect(() => systemUnderTest.hasProperty(unknownProperty)).to.throw(PropertyError);
      expect(core.assertString.calledWith(unknownProperty)).to.be.true;
    });
  });
});
