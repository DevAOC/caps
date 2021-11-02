'use strict';

const { expect } = require('@jest/globals');
const logEvent = require('../hub/logEvent.js');

describe('Testing hub', () => {
  console.log(jest.fn());

  it('Should log a mock event', () => {
    const eventHandler = logEvent('test');
    const payload = {
      store: '1-800-sendIt',
      orderID: 'es6-javascript-REST',
      customer: 'Tony Bologna',
      address: 'Paved Street',
    };

    eventHandler(payload);
    expect(console.log).toHaveBeenCalled();
  });
});
