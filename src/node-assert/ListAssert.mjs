import {IllegalArgumentError} from './error/index.mjs';
import NumberAssert from './NumberAssert.mjs';

/**
 * A list assert providing list-specific validation methods.
 *
 * @author bvfnbk
 */
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

  /**
   * Returns a {NumberAssert} in order to make more elaborate assertions about the size of the list.
   *
   * @return {NumberAssert} A {NumberAssert} wrapping the length of the wrapped list.
   */
  size() {
    return new NumberAssert(this.core, this.value.length);
  }
}

export default ListAssert;
