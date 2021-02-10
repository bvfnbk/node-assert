import mocha from 'mocha';
import chai from 'chai';
import {ListAssert, NumberAssert} from '../src/node-assert/index.mjs';
import {core} from './mocks.js';
import {IllegalArgumentError} from '../src/node-assert/error/index.mjs';
import sinon from 'sinon';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('ListAssert', () => {
  it('Constructor asserts type.', () => {
    // When
    new ListAssert(core, []);

    // Then
    expect(core.assertList.calledWith([])).to.be.true;
  });

  it('size() returns a number assert', () => {
    // Please cf. ./test_NumberAssert.js for test details.
    // Given
    const systemUnderTest = new ListAssert(core, []);

    // When
    const actual = systemUnderTest.size();

    // Then
    expect(actual).to.be.instanceof(NumberAssert);
  });

  describe('isEmpty()', () => {
    it('returns a list assert if given an empty list.', () => {
      // Given
      const systemUnderTest = new ListAssert(core, []);

      // When
      const actual = systemUnderTest.isEmpty();

      // Then
      expect(actual).to.be.instanceof(ListAssert);
    });

    it('throws illegal argument error when given a non-empty list', () => {
      // Given
      const systemUnderTest = new ListAssert(core, [1, 2, 3]);

      // When/Then
      expect(() => systemUnderTest.isEmpty()).to.throw(IllegalArgumentError);
    });
  });

  describe('isNotEmpty()', () => {
    it('returns a list assert if given a non-empty list.', () => {
      // Given
      const systemUnderTest = new ListAssert(core, [1,2,3]);

      // When
      const actual = systemUnderTest.isNotEmpty();

      // Then
      expect(actual).to.be.instanceof(ListAssert);
    });

    it('throws illegal argument error when given an empty list', () => {
      // Given
      const systemUnderTest = new ListAssert(core, []);

      // When/Then
      expect(() => systemUnderTest.isNotEmpty()).to.throw(IllegalArgumentError);
    });
  });

  describe('contains()', () => {
    it('returns a list assert if a non-empty list is checked for an existing element', () => {
      // Given
      const systemUnderTest = new ListAssert(core, [1,2,3]);

      // When
      const actual = systemUnderTest.contains(item => item === 2);

      // Then
      expect(actual).to.be.instanceof(ListAssert);
    });

    it('throws illegal argument error when an empty list is checked.', () => {
      // Given
      const systemUnderTest = new ListAssert(core, []);
      const predicate = sinon.spy();

      // When/Then
      expect(() => systemUnderTest.contains(predicate)).to.throw(IllegalArgumentError);
      expect(predicate.notCalled);
    });

    it('throws illegal argument error when a non-empty list is checked for an element which is not contained.', () => {
      // Given
      const systemUnderTest = new ListAssert(core, [1,2,3]);

      // When/Then
      expect(() => systemUnderTest.contains(item => item === 4)).to.throw(IllegalArgumentError);
    });
  });
});
