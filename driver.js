'use strict';

const parcel = require('./parcel.js');

parcel.on('pickup', (payload) => {
  console.log('Pickup', payload);
  console.log('DRIVER: Picked up', payload.info.orderID);
  parcel.emit('in-transit', payload);
});

parcel.on('in-transit', (payload) => {
  console.log('In-Transit', payload);
  parcel.emit('delivered', payload);
});

parcel.on('delivered', (payload) => {
  console.log('DRIVER: Delivered parcel', payload.info.orderID);
});
