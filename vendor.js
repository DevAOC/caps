'use strict';

const events = require('./hub/events.js');

require('./driver.js');

const info = {
  store: '1-800-sendIt',
  orderID: 'es6-javascript-REST',
  customer: 'Tony Bologna',
  address: 'Paved Street',
};

events.on('delivered', (payload) => {
  console.log('VENDOR: Thank you for delivering', payload.info.orderID);
});

events.emit('pickup', {
  time,
  info,
});
