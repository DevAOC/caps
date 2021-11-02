'use strict';

const parcel = require('./parcel.js');

require('./driver.js');

const info = {
  store: '1-800-sendIt',
  orderID: 'es6-javascript-REST',
  customer: 'Tony Bologna',
  address: 'Paved Street',
};
const time = 'An eternity';

parcel.on('delivered', (payload) => {
  console.log('VENDOR: Thank you for delivering', payload.info.orderID);
  console.log('Delivered', payload);
});

parcel.emit('pickup', {
  time,
  info,
});
