import {IllegalArgumentError, PropertyError} from './error/index.mjs';
import {isArray} from './core.mjs';

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

  /**
   * Asserts that all properties defined in the given array are contained in the wrapped objeect.
   *
   * **Please note:** This function accepts variable number of arguments or a list. It assumes variable number of
   * arguments if `arguments.length > 1`. It accepts an array of strings as well when given a single array-typed
   * argument. A single string-typed argument is a special case of the variable case.
   *
   * @param {...string | string[]} properties The property name(s) to assert.
   * @returns {ObjectAssert} the current instance.
   * @throws {UndefinedArgumentError} if one (or more) of the given value is not defined.
   * @throws {NullArgumentError} if one (or more) of the given value is `null`.
   * @throws {TypeConstraintError} if one (or more0 of the given value is no `string`
   * @throws {PropertyError} if the wrapped object does not contain the properties with the given names.
   */
  hasProperties(properties) {
    this.core.assertDefined(properties);

    const args = [].slice.call(arguments);
    if (arguments.length > 1) {
      return this.containsAllFromList(args);
    }
    if (arguments.length === 1) {
      return isArray(properties) ? this.containsAllFromList(properties) : this.hasProperty(properties);
    }
    throw new IllegalArgumentError();
  }

  /**
   * Asserts that all properties defined in the given array are contained in the wrapped object.
   *
   * @param {string[]} args the array of properties to check.
   * @returns {ObjectAssert} the current instance.
   * @throws {UndefinedArgumentError} if the given value is not defined.
   * @throws {NullArgumentError} if the given value is `null`.
   * @throws {TypeConstraintError} if the given value is no `string`
   * @throws {PropertyError} if the wrapped object does not contain a property with the given name.
   */
  containsAllFromList(args) {
    args.forEach(property => this.hasProperty(property));
    return this;
  }
}


export default ObjectAssert;
