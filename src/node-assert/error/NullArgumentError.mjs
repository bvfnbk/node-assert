import IllegalArgumentError from './IllegalArgumentError.mjs';

/**
 * Thrown when given value is <code>null</code>
 */
export default class NullArgumentError extends IllegalArgumentError {
  constructor() {
    super();
  }
}
