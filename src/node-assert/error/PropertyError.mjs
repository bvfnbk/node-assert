import IllegalArgumentError from './IllegalArgumentError.mjs';

/**
 * Thrown when given value does not contain a requested property.
 *
 * @author bvfnbk
 */
class PropertyError extends IllegalArgumentError {
  constructor() {
    super();
  }
}

export default PropertyError;
