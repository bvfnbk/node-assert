import {IllegalArgumentError, TypeConstraintError} from './error/index.mjs';
import Assert from './Assert.mjs';

/**
 * A Number assert providing methods specific to the validation of numbers.
 *
 * @author bvfnbk
 */
class NumberAssert {
  /**
   * Creates a number assert.
   *
   * @param {number} value The reference value. May be anything.
   * @throws {TypeConstraintError} if given value is no `number`.
   */
  constructor(value) {
    NumberAssert.assertIsNumber(value);
    this.value = value;
  }


  /**
   * Asserts that the other value is lower than the reference value.
   *
   * @param {number} other The value to compare.
   * @returns {NumberAssert} the current instance.
   * @throws {IllegalArgumentError} if the reference value is lower than, or equals the given value.
   * @throws {UndefinedArgumentError} if the given value is not defined.
   * @throws {NullArgumentError} if the given value is `null`.
   * @throws {TypeConstraintError} if the given value is no number.
   */
  isGreaterThan(other) {
    NumberAssert.executeAssert(this.value, other, (a, b) => a > b);
    return this;
  }

  /**
   * Asserts that the other value is lower than, or equals to the reference value.
   *
   * @param {number} other The value to compare.
   * @returns {NumberAssert} the current instance.
   * @throws {IllegalArgumentError} if the reference value is lower than the given value.
   * @throws {UndefinedArgumentError} if the given value is not defined.
   * @throws {NullArgumentError} if the given value is `null`.
   * @throws {TypeConstraintError} if the given value is no number.
   */
  isGreaterThanOrEquals(other) {
    NumberAssert.executeAssert(this.value, other, (a, b) => a >= b);
    return this;
  }

  /**
   * Asserts that the other value is greater than the reference value.
   *
   * @param {number} other The value to compare.
   * @returns {NumberAssert} the current instance.
   * @throws {IllegalArgumentError} if the reference value is greater than, or equals the given value.
   * @throws {UndefinedArgumentError} if the given value is not defined.
   * @throws {NullArgumentError} if the given value is `null`.
   * @throws {TypeConstraintError} if the given value is no number.
   */
  isLowerThan(other) {
    NumberAssert.executeAssert(this.value, other, (a, b) => a < b);
    return this;
  }

  /**
   * Asserts that the other value is greater, or equals than the reference value.
   *
   * @param {number} other The value to compare.
   * @returns {NumberAssert} the current instance.
   * @throws {IllegalArgumentError} if the reference value is greater than the given value.
   * @throws {UndefinedArgumentError} if the given value is not defined.
   * @throws {NullArgumentError} if the given value is `null`.
   * @throws {TypeConstraintError} if the given value is no number.
   */
  isLowerThanOrEquals(other) {
    NumberAssert.executeAssert(this.value, other, (a, b) => a <= b);
    return this;
  }

  /**
   * Asserts that the other value is equal to the reference value.
   *
   * @param {number} other The value to compare.
   * @returns {NumberAssert} the current instance.
   * @throws {IllegalArgumentError} if the reference value is lower than, or greater than the given value.
   * @throws {UndefinedArgumentError} if the given value is not defined.
   * @throws {NullArgumentError} if the given value is `null`.
   * @throws {TypeConstraintError} if the given value is no number.
   */
  equals(other) {
    NumberAssert.executeAssert(this.value, other, (a, b) => a === b);
    return this;
  }

  /**
   * Comparison callback
   *
   * @callback NumberAssert~comparisonFunction
   * @param {number} reference The reference value
   * @param {number} other The value to compare
   * @returns {boolean} `true` iff. `comparisonFunction(reference, other)` is `true`, `false` otherwise.
   */

  /**
   * Applies the given comparison function to the given value and the reference value.
   *
   * @param {number} reference The reference number to compare other value
   * @param {*} other The other value.
   * @param {NumberAssert~comparisonFunction} comparisonFunction The comparison function to apply to the values.
   * @throws {UndefinedArgumentError} if the other value is not defined.
   * @throws {NullArgumentError} if the other value is `null`.
   * @throws {TypeConstraintError} if the other value is no number.
   * @throws {IllegalArgumentError} if the comparison function returns `false` when applied to the reference and the
   * given value.
   */
  static executeAssert(reference, other, comparisonFunction) {
    Assert.that(other).isNotNull();
    NumberAssert.assertIsNumber(other);

    if (!comparisonFunction(reference, other)) {
      throw new IllegalArgumentError();
    }
  }

  /**
   * Asserts given value is a number.
   *
   * @param {*} value The value to assert its type.
   * @throws {TypeConstraintError} if the given value has no 'number' type.
   */
  static assertIsNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeConstraintError();
    }
  }
}

export default NumberAssert;
