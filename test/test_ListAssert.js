import mocha from 'mocha';
import chai from 'chai';
import {ListAssert} from '../src/node-assert/index.mjs';
import {core} from './mocks.js';
import {IllegalArgumentError} from '../src/node-assert/error/index.mjs';


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
});
