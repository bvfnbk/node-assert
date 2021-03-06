import mocha from 'mocha';
import chai from 'chai';
import {NumberAssert} from '../src/node-assert/index.mjs';
import {IllegalArgumentError} from '../src/node-assert/error/index.mjs';
import {core} from './mocks.js';

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('NumberAssert', () => {
  it('Constructor asserts type.', () => {
    // When
    new NumberAssert(core, 100);

    // Then
    expect(core.assertNumber.calledWith(100)).to.be.true;
  });

  describe('isGreaterThan()', () => {
    it('returns a number assert for 100 > 50', () => {
      // Given
      const systemUnderTest = new NumberAssert(core, 100);

      // When
      const result = systemUnderTest.isGreaterThan(50);

      // Then
      expect(result).to.be.instanceof(NumberAssert);
      expect(core.assertNumber.calledWith(50)).to.be.true;
    });

    [
      [200, 100],
      [100, 100]
    ].forEach(([comparisonValue, reference]) => {
      it(`throws an illegal argument error for ${reference} > ${comparisonValue} `, () => {
        const systemUnderTest = new NumberAssert(core, reference);

        // When/Then
        expect(() => systemUnderTest.isGreaterThan(comparisonValue)).to.throw(IllegalArgumentError);
        expect(core.assertNumber.calledWith(comparisonValue)).to.be.true;
      });
    });
  });

  describe('isGreaterThanOrEquals()', () => {
    [
      [50, 100],
      [100, 100]
    ].forEach(([comparisonValue, reference]) => {
      it(`returns a number assert for ${reference} >= ${comparisonValue}`, () => {
        // Given
        const systemUnderTest = new NumberAssert(core, reference);

        // When
        const result = systemUnderTest.isGreaterThanOrEquals(comparisonValue);

        // Then
        expect(result).to.be.instanceof(NumberAssert);
        expect(core.assertNumber.calledWith(comparisonValue)).to.be.true;
      });
    });

    it('throws an illegal argument error for 100 > 200', () => {
      const systemUnderTest = new NumberAssert(core, 100);

      // When/Then
      expect(() => systemUnderTest.isGreaterThanOrEquals(200)).to.throw(IllegalArgumentError);
      expect(core.assertNumber.calledWith(200)).to.be.true;
    });
  });

  describe('isLowerThan()', () => {
    it('returns a number assert for 100 < 200', () => {
      // Given
      const systemUnderTest = new NumberAssert(core, 100);

      // When
      const result = systemUnderTest.isLowerThan(200);

      // Then
      expect(result).to.be.instanceof(NumberAssert);
      expect(core.assertNumber.calledWith(200)).to.be.true;
    });

    [
      [50, 100],
      [100, 100]
    ].forEach(([comparisonValue, reference]) => {
      it(`throws an illegal argument error for ${reference} < ${comparisonValue}`, () => {
        const systemUnderTest = new NumberAssert(core, reference);

        // When/Then
        expect(() => systemUnderTest.isLowerThan(comparisonValue)).to.throw(IllegalArgumentError);
        expect(core.assertNumber.calledWith(comparisonValue)).to.be.true;
      });
    });
  });

  describe('isLowerThanOrEquals()', () => {
    [
      [200, 100],
      [100, 100]
    ].forEach(([comparisonValue, reference]) => {
      it(`returns a number assert for ${reference} <= ${comparisonValue}`, () => {
        // Given
        const systemUnderTest = new NumberAssert(core, reference);

        // When
        const result = systemUnderTest.isLowerThanOrEquals(comparisonValue);

        // Then
        expect(result).to.be.instanceof(NumberAssert);
        expect(core.assertNumber.calledWith(comparisonValue)).to.be.true;
      });

    });

    it('throws an illegal argument error for 100 <= 50', () => {
      const systemUnderTest = new NumberAssert(core, 100);

      // When/Then
      expect(() => systemUnderTest.isLowerThanOrEquals(50)).to.throw(IllegalArgumentError);
      expect(core.assertNumber.calledWith(50)).to.be.true;
    });
  });

  describe('isEqual()', () => {
    it('returns a number assert for 100 === 100', () => {
      // Given
      const systemUnderTest = new NumberAssert(core, 100);

      // When
      const result = systemUnderTest.equals(100);

      // Then
      expect(result).to.be.instanceof(NumberAssert);
      expect(core.assertNumber.calledWith(100)).to.be.true;
    });

    [
      [50, 100],
      [200, 100]
    ].forEach(([comparisonValue, reference]) => {
      it(`throws an illegal argument error for ${reference} !== ${comparisonValue}`, () => {
        const systemUnderTest = new NumberAssert(core, reference);

        // When/Then
        expect(() => systemUnderTest.equals(comparisonValue)).to.throw(IllegalArgumentError);
        expect(core.assertNumber.calledWith(comparisonValue)).to.be.true;

      });
    });
  });

  describe('isInRange()', () => {
    [
      [50, 100, 200],
      [50, 50, 200],
      [50, 200, 200]
    ].forEach(([lower, reference, upper]) => {
      it(`returns a number assert for ${lower} <= ${reference} <= ${upper}`, () => {
        // Given
        const systemUnderTest = new NumberAssert(core, reference);

        // When
        const result = systemUnderTest.isInRange(lower, upper);

        // Then
        expect(result).to.be.instanceof(NumberAssert);
        expect(core.assertNumber.calledWith(lower)).to.be.true;
        expect(core.assertNumber.calledWith(upper)).to.be.true;
      });
    });

    [
      [50, 0, 200], // < lower
      [50, 400, 200], // > upper
      [200, 100, 50] // lower > upper
    ].forEach(([lower, reference, upper]) => {
      it(`throws an illegal argument error for lower bound ${lower}, reference ${reference} and upper bound ${upper}`, () => {
        const systemUnderTest = new NumberAssert(core, reference);

        // When/Then
        expect(() => systemUnderTest.isInRange(lower, upper)).to.throw(IllegalArgumentError);
        expect(core.assertNumber.calledWith(lower)).to.be.true;
        expect(core.assertNumber.calledWith(upper)).to.be.true;
      });
    });
  });
});
