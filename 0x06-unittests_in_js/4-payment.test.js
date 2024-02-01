const { describe, it } = require('mocha');
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and log the correct total', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    assert(consoleLogSpy.withArgs('The total is: 10').calledOnce);
    assert(calculateNumberStub.withArgs('SUM', 100, 20).calledOnce);

    consoleLogSpy.restore(); // Restore the original console.log method
    calculateNumberStub.restore(); // Restore the original Utils.calculateNumber method
  });
});
