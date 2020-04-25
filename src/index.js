/**
 * Thrown when given value is not defined.
 */
export class UndefinedArgumentError extends Error {
  constructor() {
    super();
  }
}

/**
 * Thrown when given value is <code>null</code>
 */
export class NullArgumentError extends Error {
  constructor() {
    super();
  }
}

/**
 * Thrown when given value does not match expected type.
 */
export class TypeConstraintError extends Error {
  constructor() {
    super();
  }
}

/**
 * Thrown when given value violates other, unspecific constraint.
 */
export class IllegalArgumentError extends Error {
  constructor() {
    super();
  }
}

/**
 * String assert providing string validation functions.
 */
export class StringAssert {
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


/**
 * Provide common asserts:
 *
 *   - defined()
 *   - notNull()
 *
 * and factories for typed asserts:
 *
 *   - string()
 */
export class GenericAssert {
  /**
   * Creates a generic assert.
   *
   * @param value The value to wrap. May be anything.
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * Asserts wrapped value is defined.
   *
   * @return {GenericAssert}
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   */
  defined() {
    if (typeof this.value === 'undefined') {
      throw new UndefinedArgumentError();
    }
    return this;
  }

  /**
   * Asserts wrapped value is not <code>null</code>
   *
   * @return {GenericAssert} this assert to support fluent validation.
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   * @throws {NullArgumentError} if the contained value is <code>null</code>
   */
  notNull() {
    this.defined();
    if (this.value === null) {
      throw new NullArgumentError();
    }
    return this;
  }

  /**
   * Asserts wrapped value is a <code>string</code>.
   *
   * @return {StringAssert} A <code>string</code>-specific assert.
   * @throws {UndefinedArgumentError} if the contained value is not defined.
   * @throws {NullArgumentError} if the contained value is <code>null</code>
   * @throws {TypeConstraintError} if the contained value is no <code>string</code>
   */
  string() {
    this.notNull();
    return new StringAssert(this.value);
  }
}

/**
 * Factory creating the actual fluent assert.
 */
export class Assert {
  /**
   * Create and return a GenericAssert.
   *
   * @param value The argument for which to create a GenericAssert
   * @return {GenericAssert} a generic assert wrapping the given <code>value</code>
   */
  static that(value) {
    return new GenericAssert(value);
  }
}
