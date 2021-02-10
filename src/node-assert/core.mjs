import {NullArgumentError, TypeConstraintError, UndefinedArgumentError} from './error/index.mjs';

/**
 * The `core` module contains all basic assert functions.
 *
 * @module core
 * @author bvfnbk
 */

/**
 * Assert given value is defined.
 *
 * @param {*} value The value to assert.
 * @throws {UndefinedArgumentError} if the given value is not defined.
 */
function assertDefined(value) {
  if (typeof value === 'undefined') {
    throw new UndefinedArgumentError();
  }
}

/**
 * Assert given value is not `null`.
 *
 * @param {*} value The value to assert.
 * @throws {UndefinedArgumentError} if the given value is not defined.
 * @throws {NullArgumentError} if the given value is `null`.
 */
function assertNotNull(value) {
  assertDefined(value);
  if (value === null) {
    throw new NullArgumentError();
  }
}

/**
 * Assert given value is a string.
 *
 * @param {string} value The value to assert.
 * @throws {UndefinedArgumentError} if the given value is not defined.
 * @throws {NullArgumentError} if the given value is `null`.
 * @throws {TypeConstraintError} if the given value is no string.
 */
function assertString(value) {
  assertNotNull(value);
  if (typeof value !== 'string') {
    throw new TypeConstraintError();
  }
}

/**
 * Assert given value is a number.
 *
 * @param {number} value The value to assert.
 * @throws {UndefinedArgumentError} if the given value is not defined.
 * @throws {NullArgumentError} if the given value is `null`.
 * @throws {TypeConstraintError} if the given value is no number.
 */
function assertNumber(value) {
  assertNotNull(value);
  if (typeof value !== 'number') {
    throw new TypeConstraintError();
  }
}

/**
 * Assert given value is a list.
 *
 * @param {any[]} value The value to assert.
 */
function assertList(value) {
  assertNotNull(value);
  let isArray;

  if (typeof Array.isArray === 'undefined') {
    isArray = (argument) => Object.prototype.toString.call(argument) === '[object Array]';
  } else {
    isArray = (argument) => Array.isArray(argument);
  }
  if (!isArray(value)) {
    throw new TypeConstraintError();
  }
  return this;
}

export {
  assertDefined,
  assertNotNull,
  assertString,
  assertNumber,
  assertList
};
