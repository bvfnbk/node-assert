import IllegalArgumentError from './IllegalArgumentError.mjs';

/**
 * Thrown when given value is `null`.
 *
 * @author bvfnbk
 */
class NullArgumentError extends IllegalArgumentError {
  constructor() {
    super();
  }
}

export default NullArgumentError;
