import {IllegalArgumentError, TypeConstraintError} from './error/index.mjs';

/**
 * A `string` assert providing methods specific to the validation of strings.
 *
 * @author bvfnbk
 */
class StringAssert {
  /**
   * Asserts that the type of the given `value` is `string`.
   *
   * @param {string} value The value to wrap.
   * @throws {TypeConstraintError} if given value is no `string`.
   */
  constructor(value) {
    if (typeof value !== 'string') {
      throw new TypeConstraintError();
    }
    this.value = value;
  }

  /**
   * Tests whether wrapped value is not blank
   *
   * @returns {StringAssert} the current instance.
   * @throws {IllegalArgumentError} if wrapped `value` is blank.
   */
  isNotBlank() {
    if (this.value.trim() === '') {
      throw new IllegalArgumentError();
    }
    return this;
  }

  /**
   * Test whether wrapped value is not empty.
   *
   * @return {StringAssert} the current instance.
   * @throws {IllegalArgumentError} if the wrapped `value` is the empty `string`.
   */
  isNotEmpty() {
    if (this.value === '') {
      throw new IllegalArgumentError();
    }
    return this;
  }
}

export default StringAssert;
