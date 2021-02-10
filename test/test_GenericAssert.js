import mocha from 'mocha';
import chai from 'chai';
import {GenericAssert} from '../src/node-assert/index.mjs';
import sinon from 'sinon';


const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;


describe('GenericAssert', () => {
  const mockCore = {
    assertDefined : sinon.spy(),
    assertNotNull : sinon.spy(),
    assertString : sinon.spy(),
    assertNumber: sinon.spy()
  };

  describe('Generic delegates calls to core module functions...', () => {
    // Given
    let reference = 123;
    const generic = new GenericAssert(mockCore, reference);

    it ('isDefined()', () => {
      // When
      generic.isDefined();

      // Then
      expect(mockCore.assertDefined.calledWith(reference)).to.be.true;
    });

    it ('isNotNull()', () => {
      // When
      generic.isNotNull();

      // Then
      expect(mockCore.assertDefined.calledWith(reference)).to.be.true;
      expect(mockCore.assertNotNull.calledWith(reference)).to.be.true;
    });

    it ('isString()', () => {
      // When
      generic.isString();

      // Then
      expect(mockCore.assertDefined.calledWith(reference)).to.be.true;
      expect(mockCore.assertNotNull.calledWith(reference)).to.be.true;
      expect(mockCore.assertString.calledWith(reference)).to.be.true;
    });

    it ('isNumber()', () => {
      // When
      generic.isNumber();

      // Then
      expect(mockCore.assertDefined.calledWith(reference)).to.be.true;
      expect(mockCore.assertNotNull.calledWith(reference)).to.be.true;
      expect(mockCore.assertNumber.calledWith(reference)).to.be.true;
    });
  });
});
