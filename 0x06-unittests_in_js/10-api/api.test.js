const request = require('request');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('index', () => {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET',
  };

  it('check correct status code', () => new Promise((done) => {
    request(options, (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  }));

  it('check correct content', () => new Promise((done) => {
    request(options, (err, res, body) => {
      expect(body).toBe('Welcome to the payment system');
      done();
    });
  }));
});

describe('login', () => {
  it("check correct status code for request that's sent properly", () => new Promise((done) => {
    const opt = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'JOE',
      },
    };
    request.post(opt, (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  }));

  it("check correct content for request that's sent properly", () => new Promise((done) => {
    const opts = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'JOE',
      },
    };
    request.post(opts, (err, res, body) => {
      if (err) {
        expect(res.statusCode).not.toBe(200);
      } else {
        expect(body).toContain('Welcome JOE');
      }
      done();
    });
  }));

  it("check correct status code for request that's not sent properly", () => new Promise((done) => {
    const op = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        usame: 'JOE',
      },
    };
    request.post(op, (err, res) => {
      expect(res.statusCode).toBe(404);
      done();
    });
  }));
});

describe('cart', () => {
  it('check correct status code for correct url', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/12', (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  }));

  it('check correct content for correct url', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(body).toBe('Payment methods for cart 12');
      done();
    });
  }));
});

describe('available_payments', () => {
  it('check correct status for correct url', () => new Promise((done) => {
    request.get('http://localhost:7865/available_payments', (err, res) => {
      if (err) {
        expect(res.statusCode).not.toBe(200);
      } else {
        expect(res.statusCode).toBe(200);
      }
      done();
    });
  }));

  it('check correct body content for correct url', () => new Promise((done) => {
    const option = { json: true };
    const payLoad = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    request.get('http://localhost:7865/available_payments', option, (err, res, body) => {
      if (err) {
        expect(res.statusCode).not.toBe(200);
      } else {
        expect(body).toStrictEqual(payLoad);
      }
      done();
    });
  }));
});
