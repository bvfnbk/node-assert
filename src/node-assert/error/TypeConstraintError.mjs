import IllegalArgumentError from './IllegalArgumentError.mjs';

/**
 * Thrown when given value does not match expected type.
 *
 * @author bvfnbk
 */
class TypeConstraintError extends IllegalArgumentError {
  constructor() {
    super();
  }
}

export default TypeConstraintError;
