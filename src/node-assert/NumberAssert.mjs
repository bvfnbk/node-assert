import {IllegalArgumentError} from './error/index.mjs';

/**
 * A Number assert providing methods specific to the validation of numbers.
 *
 * @author bvfnbk
 */
class NumberAssert {
  /**
   * Creates a number assert.
   *
   * @param {module:core} core the core module providing all assert functions.
   * @param {number} value The reference value. May be anything.
   * @throws {UndefinedArgumentError} if given value is not defined.
   * @throws {NullArgumentError} if given value is `null`.
   * @throws {TypeConstraintError} if given value is no `number`.
   */
  constructor(core, value) {
    core.assertNumber(value);

    this.core = core;
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
    this.core.assertNumber(other);

    if (this.value <= other) {
      throw new IllegalArgumentError();
    }

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
    this.core.assertNumber(other);

    if (this.value < other) {
      throw new IllegalArgumentError();
    }

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
    this.core.assertNumber(other);

    if (this.value >= other) {
      throw new IllegalArgumentError();
    }

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
    this.core.assertNumber(other);

    if (this.value > other) {
      throw new IllegalArgumentError();
    }

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
    this.core.assertNumber(other);

    if (this.value !== other) {
      throw new IllegalArgumentError();
    }

    return this;
  }

  /**
   * Asserts that the other value is in the given range (including the boundaries). It runs
   *
   * ```javascript
   * isGreaterThanOrEquals(lower);
   * isLowerThanOrEquals(upper);
   * ```
   *
   * **Please note:** the lower bound is checked first. Thus, an undefined or `null` value for the upper bound may not
   * be detected if the check for the upper bound fails.
   *
   * @param {number} lower The lower boundary (inclusive)
   * @param {number} upper The upper boundary (inclusive).
   * @returns {NumberAssert} the current instance.
   * @throws {IllegalArgumentError} if the reference value is lower than the `lower` bound, or greater than the `upper` bound.
   * @throws {UndefinedArgumentError} if `lower` or `upper` is not defined.
   * @throws {NullArgumentError} if `lower` or `upper` value is `null`.
   * @throws {TypeConstraintError} if `lower` or `upper` is no number.
   */
  isInRange(lower, upper) {
    this.isGreaterThanOrEquals(lower);
    this.isLowerThanOrEquals(upper);
    return this;
  }
}

export default NumberAssert;
