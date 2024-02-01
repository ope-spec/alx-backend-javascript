const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a payment token asynchronously using the done callback', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.have.property('data');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
