'use strict';

const socketio = require('socket.io');

const PORT = process.env.PORT || 3001;

const server = socketio(PORT);

const caps = server.of('/caps');

let orderId;

caps.on('connection', (socket) => {
  console.log('Connected to socket', socket.id);

  socket.on('pickup', (payload) => {
    orderId = payload.orderId;
    socket.join(orderId);
    caps.emit('join', payload);
    console.log(payload);
  });

  socket.on('in-transit', (payload) => {
    socket.join(orderId);
    console.log(payload);
    caps.to(orderId).emit('delivered', payload);
  });
});
