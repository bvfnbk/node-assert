class ObjectAssert {
  /**
   * Asserts that the type of the given `value` is an object.
   *
   * @param {module:core} core the core module providing all assert functions.
   * @param value The value to wrap.
   * @throws {UndefinedArgumentError} if given value is not defined.
   * @throws {NullArgumentError} if given value is `null`.
   * @throws {TypeConstraintError} if given value is no object.
   */
  constructor(core, value) {
    core.assertObject(value);

    this.core = core;
    this.value = value;
  }
}


export default ObjectAssert;
