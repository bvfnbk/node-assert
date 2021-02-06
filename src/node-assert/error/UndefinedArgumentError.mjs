import IllegalArgumentError from './IllegalArgumentError.mjs';

/**
 * Thrown when given value is not defined.
 *
 * @author bvfnbk
 */
class UndefinedArgumentError extends IllegalArgumentError {
  constructor() {
    super();
  }
}

export default UndefinedArgumentError;
