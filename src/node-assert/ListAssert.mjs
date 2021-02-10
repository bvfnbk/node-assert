import {IllegalArgumentError} from './error/index.mjs';
import NumberAssert from './NumberAssert.mjs';

/**
 * A predicate applied to an item of the list.
 *
 * @callback ListAssert.predicate
 * @param {any} item - The current item.
 * @returns {boolean} `true` if the item matches, `false` otherwise.
 */

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

  /**
   * Checks the wrapped list whether it contains an element for which the given predicate evaluates to `true`.
   *
   * **Please note**: it stops at the first item the predicate evaluates to `true`.
   *
   * @param {ListAssert.predicate} predicate - the predicate to apply to each item.
   * @throws {IllegalArgumentError} if the list does not contain an element for which the given predicate evaluates to
   * `true` or if the list is empty.
   */
  contains(predicate) {
    if (this.value.length === 0) {
      throw new IllegalArgumentError();
    }
    for (let index = 0; index < this.value.length; index++) {
      if (predicate(this.value[index])) {
        return this;
      }
    }
    throw new IllegalArgumentError();
  }
}

export default ListAssert;
