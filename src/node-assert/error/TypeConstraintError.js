import IllegalArgumentError from './IllegalArgumentError.js';

/**
 * Thrown when given value does not match expected type.
 */
export default class TypeConstraintError extends IllegalArgumentError {
  constructor() {
    super();
  }
}
