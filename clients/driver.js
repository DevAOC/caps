'use strict';

const client = require('socket.io-client');

const driverClient = client('http://localhost:3001/caps');

driverClient.on('join', (payload) => {
  console.log('Picked up', payload.orderId);
  driverClient.emit('in-transit', payload);
});

driverClient.on('delivered', (payload) => {
  console.log('Delivered', payload.orderId);
});
