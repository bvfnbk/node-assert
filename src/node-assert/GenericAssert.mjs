import {NullArgumentError, UndefinedArgumentError} from './error/index.mjs';
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
   * @param {*} value The value to wrap. May be anything.
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * Asserts wrapped value is defined.
   *
   * @returns {GenericAssert} the current instance.
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   */
  isDefined() {
    if (typeof this.value === 'undefined') {
      throw new UndefinedArgumentError();
    }
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
    this.isDefined();
    if (this.value === null) {
      throw new NullArgumentError();
    }
    return this;
  }

  /**
   * Asserts wrapped value is a `string`
   *
   * **Please note:** This method asserts that the value is not `null`, the type assertion is performed in the
   * constructor {@link StringAssert}
   *
   * @returns {StringAssert} A `string`-specific assert (to continue validation).
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   * @throws {NullArgumentError} if the contained value is `null`
   * @throws {TypeConstraintError} if the contained value is no `string`
   */
  isString() {
    this.isNotNull();
    return new StringAssert(this.value);
  }

  isNumber() {
    this.isNotNull();
    return new NumberAssert(this.value);
  }
}

export default GenericAssert;
