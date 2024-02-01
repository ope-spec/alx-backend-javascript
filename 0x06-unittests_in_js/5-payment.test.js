const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach('Set up spy to use for each test', () => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach('Restore spy after each test', () => {
    consoleLogSpy.restore();
  });

  it('should log the correct total for a payment request', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.withArgs('The total is: 120').calledOnce).to.be.true;
  });

  it('should log the correct total for another payment request', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
