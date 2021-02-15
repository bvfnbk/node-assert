import {PropertyError} from './error/index.mjs';

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

  /**
   * Asserts that the wrapped object contains an own property with the given name.
   *
   * @param {string} value the name of the property.
   * @returns {ObjectAssert} the current instance.
   * @throws {UndefinedArgumentError} if the given value is not defined.
   * @throws {NullArgumentError} if the given value is `null`.
   * @throws {TypeConstraintError} if the given value is no `string`
   * @throws {PropertyError} if the wrapped object does not contain a property with the given name.
   */
  hasProperty(value) {
    this.core.assertString(value);

    if (!Object.prototype.hasOwnProperty.call(this.value, value)) {
      throw new PropertyError();
    }

    return this;
  }
}


export default ObjectAssert;
