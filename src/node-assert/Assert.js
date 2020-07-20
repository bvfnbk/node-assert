import GenericAssert from './GenericAssert.js';


/**
 * Factory creating the actual fluent assert.
 */
export default class Assert {
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
