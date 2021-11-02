'use strict';

const events = require('./events.js');
const logEvent = require('./logEvent.js');

events.on('pickup', logEvent('pickup'));
events.on('in-transit', logEvent('in-transit'));
events.on('delivered', logEvent('delivered'));
