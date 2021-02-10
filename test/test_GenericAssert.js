import mocha from 'mocha';
import chai from 'chai';
import {GenericAssert} from '../src/node-assert/index.mjs';
import {core} from './mocks.js';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('GenericAssert', () => {
  describe('Generic delegates calls to core module functions...', () => {
    // Given
    let reference = 123;
    const generic = new GenericAssert(core, reference);

    it('isDefined()', () => {
      // When
      generic.isDefined();

      // Then
      expect(core.assertDefined.calledWith(reference)).to.be.true;
    });

    it('isNotNull()', () => {
      // When
      generic.isNotNull();

      // Then
      expect(core.assertDefined.calledWith(reference)).to.be.true;
      expect(core.assertNotNull.calledWith(reference)).to.be.true;
    });

    it('isString()', () => {
      // When
      generic.isString();

      // Then
      expect(core.assertDefined.calledWith(reference)).to.be.true;
      expect(core.assertNotNull.calledWith(reference)).to.be.true;
      expect(core.assertString.calledWith(reference)).to.be.true;
    });

    it('isNumber()', () => {
      // When
      generic.isNumber();

      // Then
      expect(core.assertDefined.calledWith(reference)).to.be.true;
      expect(core.assertNotNull.calledWith(reference)).to.be.true;
      expect(core.assertNumber.calledWith(reference)).to.be.true;
    });

    it('isList()', () => {
      // When
      generic.isList();

      // Then
      expect(core.assertDefined.calledWith(reference)).to.be.true;
      expect(core.assertNotNull.calledWith(reference)).to.be.true;
      expect(core.assertList.calledWith(reference)).to.be.true;
    });
  });
});
