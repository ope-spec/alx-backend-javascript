/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-test-return-statement */
/* eslint-disable jest/valid-expect */

const request = require('request');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('login endpoint', () => {
  const option = {
    url: 'http://localhost:7865/',
    method: 'GET',
  };
  it('check correct status code', () => {
    expect.hasAssertions();
    return new Promise((done) => {
      request(option, (err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
  it('check correct content', () => {
    expect.hasAssertions();
    return new Promise((done) => {
      request(option, (err, res, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});

describe('available payments endpoint', () => {
  it('check correct status for correct url', () => {
    expect.hasAssertions();
    request.get('http://localhost:7865/available_payments', (err, res) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.equal(200);
      }
    });
  });
  it('check correct body content for correct url', () => {
    expect.hasAssertions();
    const option = { json: true };
    const payLoad = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    request.get('http://localhost:7865/available_payments', option, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.deep.equal(payLoad);
      }
    });
  });
});
