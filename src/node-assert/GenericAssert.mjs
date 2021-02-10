import StringAssert from './StringAssert.mjs';
import NumberAssert from './NumberAssert.mjs';

/**
 * A generic assert. Provides methods to assert common properties, like whether a value is defined or `null`.
 *
 * @author bvfnbk
 */
class GenericAssert {
  /**
   * Creates a generic assert.
   *
   * @param {module:core} core the core module providing all assert functions.
   * @param {*} value The value to wrap. May be anything.
   */
  constructor(core, value) {
    this.core = core;
    this.value = value;
  }

  /**
   * Asserts wrapped value is defined.
   *
   * @returns {GenericAssert} the current instance.
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   */
  isDefined() {
    this.core.assertDefined(this.value);
    return this;
  }

  /**
   * Asserts wrapped value is not `null`.
   *
   * @returns {GenericAssert} the current instance.
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   * @throws {NullArgumentError} if the contained value is `null`.
   */
  isNotNull() {
    this.core.assertNotNull(this.value);
    return this;
  }

  /**
   * Asserts wrapped value is a string.
   *
   * @returns {StringAssert} A string-specific assert (to continue validation).
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   * @throws {NullArgumentError} if the contained value is `null`
   * @throws {TypeConstraintError} if the contained value is no string.
   */
  isString() {
    this.core.assertString(this.value);
    return new StringAssert(this.core, this.value);
  }

  /**
   * Asserts wrapped value is a number.
   *
   * @returns {NumberAssert} A number-specific assert (to continue validation).
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   * @throws {NullArgumentError} if the contained value is `null`
   * @throws {TypeConstraintError} if the contained value is no number.
   */
  isNumber() {
    this.core.assertNumber(this.value);
    return new NumberAssert(this.core, this.value);
  }
}

export default GenericAssert;
