import GenericAssert from './GenericAssert.mjs';


/**
 * Static factory creating the entry point of the fluent assert.
 *
 * @author bvfnbk
 */
class Assert {
  /**
   * Create and return a {@link GenericAssert}.
   *
   * @param {*} value The argument for which to create a {@link GenericAssert}
   * @returns {GenericAssert} a generic assert wrapping the given <code>value</code>
   */
  static that(value) {
    return new GenericAssert(value);
  }
}

export default Assert;
