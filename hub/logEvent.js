'use strict';

const logEvent = (event) => (payload) => {
  const log = {
    event,
    time: new Date().toString(),
    payload,
  };
  console.log('Event', log);
};

module.exports = logEvent;
