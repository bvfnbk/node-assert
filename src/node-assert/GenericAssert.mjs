import {NullArgumentError, UndefinedArgumentError} from './error/index.mjs';
import StringAssert from './StringAssert.mjs';

export default class GenericAssert {
  /**
   * Creates a generic assert.
   *
   * @param value The value to wrap. May be anything.
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * Asserts wrapped value is defined.
   *
   * @return {GenericAssert}
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   */
  defined() {
    if (typeof this.value === 'undefined') {
      throw new UndefinedArgumentError();
    }
    return this;
  }

  /**
   * Asserts wrapped value is not <code>null</code>
   *
   * @return {GenericAssert} this assert to support fluent validation.
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   * @throws {NullArgumentError} if the contained value is <code>null</code>
   */
  notNull() {
    this.defined();
    if (this.value === null) {
      throw new NullArgumentError();
    }
    return this;
  }

  /**
   * Asserts wrapped value is a <code>string</code>.
   *
   * @return {StringAssert} A <code>string</code>-specific assert.
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   * @throws {NullArgumentError} if the contained value is <code>null</code>
   * @throws {TypeConstraintError} if the contained value is no <code>string</code>
   */
  string() {
    this.notNull();
    return new StringAssert(this.value);
  }
}
