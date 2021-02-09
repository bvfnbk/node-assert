/**
 * A Number assert providing methods specific to the validation of numbers.
 *
 * @author bvfnbk
 */
import {IllegalArgumentError, TypeConstraintError} from './error/index.mjs';
import Assert from './Assert.mjs';

class NumberAssert {
  constructor(value) {
    NumberAssert.assertIsNumber(value);
    this.value = value;
  }

  isGreaterThan(other) {
    Assert.that(other).isNotNull();
    NumberAssert.assertIsNumber(other);
    if (this.value <= other) {
      throw new IllegalArgumentError();
    }
    return this;
  }

  static assertIsNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeConstraintError();
    }
  }
}

export default NumberAssert;
