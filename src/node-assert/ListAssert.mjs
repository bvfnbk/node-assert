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
}

export default ListAssert;
