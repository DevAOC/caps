'use strict';

const events = require('./hub/events.js');

events.on('pickup', (payload) => {
  console.log('DRIVER: Picked up', payload.info.orderID);
  events.emit('in-transit', payload);
});

events.on('in-transit', (payload) => {
  events.emit('delivered', payload);
});

events.on('delivered', (payload) => {
  console.log('DRIVER: Delivered parcel', payload.info.orderID);
});
