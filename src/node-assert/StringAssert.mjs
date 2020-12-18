import {IllegalArgumentError, TypeConstraintError} from './error/index.mjs';

/**
 * A string assert providing methods specific to the validation of strings.
 */
export default class StringAssert {
  /**
   * Creates assert
   *
   * @param value The value to wrap.
   * @throws TypeConstraintError if given value is no string.
   */
  constructor(value) {
    if (typeof value !== 'string') {
      throw new TypeConstraintError();
    }
    this.value = value;
  }

  /**
   * Test whether wrapped value is not blank; throws {IllegalArgumentError} if blank.
   *
   * @return {StringAssert}
   */
  notBlank() {
    if (this.value.trim() === '') {
      throw new IllegalArgumentError();
    }
    return this;
  }

  /**
   * Test whether wrapped value is not empty; throws {IllegalArgumentError} if empty.
   *
   * @return {StringAssert}
   */
  notEmpty() {
    if (this.value === '') {
      throw new IllegalArgumentError();
    }
    return this;
  }
}
