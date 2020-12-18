import IllegalArgumentError from './IllegalArgumentError.mjs';

/**
 * Thrown when given value is not defined.
 */
export default class UndefinedArgumentError extends IllegalArgumentError {
  constructor() {
    super();
  }
}
