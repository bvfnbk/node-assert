import IllegalArgumentError from './IllegalArgumentError.mjs';

/**
 * Thrown when given value does not match expected type.
 */
export default class TypeConstraintError extends IllegalArgumentError {
  constructor() {
    super();
  }
}
