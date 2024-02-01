const { describe, it } = require('mocha');
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should ensure Utils.calculateNumber is called once', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(50, 24.52);

    assert(calculateNumberSpy.calledOnce);

    calculateNumberSpy.restore();
  });
});
