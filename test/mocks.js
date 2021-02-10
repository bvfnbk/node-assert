import sinon from 'sinon';

/**
 * Define required mocks in a central place.
 *
 * @module mocks
 * @author bvfnbk
 */

const core = {
  assertDefined: sinon.spy(),
  assertNotNull: sinon.spy(),
  assertString: sinon.spy(),
  assertNumber: sinon.spy(),
  assertList: sinon.spy()
};

export {
  core
};
