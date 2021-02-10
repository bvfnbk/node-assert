import mocha from 'mocha';
import chai from 'chai';
import {StringAssert} from '../src/node-assert/index.mjs';
import {IllegalArgumentError} from '../src/node-assert/error/index.mjs';
import sinon from 'sinon';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('StringAssert', () => {
  const mockCore = {
    assertDefined : sinon.spy(),
    assertNotNull : sinon.spy(),
    assertString : sinon.spy(),
    assertNumber: sinon.spy()
  };

  it('Constructor asserts type.', () => {
    // Given
    const reference = 'value';

    // When
    new StringAssert(mockCore, reference);

    // Then
    expect(mockCore.assertString.calledWith(reference)).to.be.true;
  });

  describe('isNotBlank()', () => {
    const blanks = ['', '\t', '\n', ' '];
    blanks.forEach(value => {
      it(`throws illegal argument error when given a blank "${value}".`, () => {
        // Given
        const systemUnderTest = new StringAssert(mockCore, value);

        // When/Then
        expect(() => systemUnderTest.isNotBlank()).to.throw(IllegalArgumentError);
      });
    });

    it('returns a string assert if it succeeds', () => {
      // Given
      const systemUnderTest = new StringAssert(mockCore, 'value');

      // When/Then
      expect(systemUnderTest.isNotBlank()).to.be.instanceof(StringAssert);
    });
  });

  describe('isNotEmpty()', () => {
    const notEmpty = [ '\t', '\n', ' ', 'value'];
    notEmpty.forEach(value => {
      it(`returns a string assert if given a non-empty string ${value}`, () => {
        // Given
        const systemUnderTest = new StringAssert(mockCore, value);

        // When/Then
        expect(systemUnderTest.isNotEmpty()).to.be.instanceof(StringAssert);
      });
    });

    it('throws illegal argument error when given an empty string', () => {
      // Given
      const systemUnderTest = new StringAssert(mockCore, '');

      // When/Then
      expect(() => systemUnderTest.isNotEmpty()).to.throw(IllegalArgumentError);
    });
  });
});
