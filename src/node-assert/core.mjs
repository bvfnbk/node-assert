import {NullArgumentError, TypeConstraintError, UndefinedArgumentError} from './error/index.mjs';

/**
 * The `core` module contains all basic assert functions.
 *
 * @module core
 * @author bvfnbk
 */

/**
 * Checks whether given valus is an array or not.
 *
 * @param {any[]} value The value to check.
 * @returns {boolean} `true` iff. given value is an array, `false` otherwise.
 */
function isArray(value) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(value) === '[object Array]';
  } else {
    return Array.isArray(value);
  }
}

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
 * @throws {UndefinedArgumentError} if given value is not defined.
 * @throws {NullArgumentError} if given value is `null`
 * @throws {TypeConstraintError} if given value is no list.
 */
function assertList(value) {
  assertNotNull(value);
  if (!isArray(value)) {
    throw new TypeConstraintError();
  }
  return this;
}

/**
 * Assert given value is an object.
 *
 * @param {object} value The value to assert.
 * @throws {UndefinedArgumentError} if given value is not defined.
 * @throws {NullArgumentError} if given value is `null`
 * @throws {TypeConstraintError} if given value is no object.
 */
function assertObject(value) {
  assertNotNull(value);
  if (typeof value !== 'object') {
    throw new TypeConstraintError();
  }
  if (isArray(value)) {
    throw new TypeConstraintError();
  }
}

export {
  isArray,
  assertDefined,
  assertNotNull,
  assertString,
  assertNumber,
  assertList,
  assertObject
};
