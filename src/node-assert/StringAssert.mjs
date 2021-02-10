import {IllegalArgumentError} from './error/index.mjs';

/**
 * A `string` assert providing methods specific to the validation of strings.
 *
 * @author bvfnbk
 */
class StringAssert {
  /**
   * Asserts that the type of the given `value` is `string`.
   *
   * @param {module:core} core the core module providing all assert functions.
   * @param {string} value The value to wrap.
   * @throws {UndefinedArgumentError} if given value is not defined.
   * @throws {NullArgumentError} if given value is `null`.
   * @throws {TypeConstraintError} if given value is no `string`.
   */
  constructor(core, value) {
    core.assertString(value);

    this.core = core;
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
