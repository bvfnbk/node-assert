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
    NumberAssert.executeAssert(this.value, other, (a, b) => a > b);
    return this;
  }

  isLowerThan(other) {
    NumberAssert.executeAssert(this.value, other, (a, b) => a < b);
    return this;
  }

  equals(other) {
    NumberAssert.executeAssert(this.value, other, (a, b) => a === b);
    return this;
  }

  static executeAssert(reference, given, comparisonFunction) {
    Assert.that(given).isNotNull();
    NumberAssert.assertIsNumber(given);
    if (!comparisonFunction(reference, given)) {
      throw new IllegalArgumentError();
    }
  }

  static assertIsNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeConstraintError();
    }
  }
}

export default NumberAssert;
