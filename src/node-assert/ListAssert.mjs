/**
 * A list assert providing list-specific validation methods.
 *
 * @author bvfnbk
 */
import {IllegalArgumentError} from './error/index.mjs';

class ListAssert {
  /**
   * Creates a number assert.
   *
   * @param {module:core} core the core module providing all assert functions.
   * @param {any[]} value The reference value. May be anything.
   * @throws {UndefinedArgumentError} if given value is not defined.
   * @throws {NullArgumentError} if given value is `null`.
   * @throws {TypeConstraintError} if given value is no array/list.
   */
  constructor(core, value) {
    core.assertList(value);

    this.core = core;
    this.value = value;
  }

  /**
   * Asserts that wrapped value is an empty list.
   *
   * @return {ListAssert} the current instance.
   * @throws {IllegalArgumentError} if wrapped list is not empty.
   */
  isEmpty() {
    if (this.value.length > 0) {
      throw new IllegalArgumentError();
    }
    return this;
  }

  /**
   * Asserts that wrapped value is a non-empty list.
   *
   * @return {ListAssert} the current instance.
   * @throws {IllegalArgumentError} if the wrapped list is empty.
   */
  isNotEmpty() {
    if (this.value.length === 0) {
      throw new IllegalArgumentError();
    }
    return this;
  }

}

export default ListAssert;
