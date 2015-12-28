var bunyan = require('bunyan');
global.log = bunyan.createLogger({
	name: 'hello',
	streams: [{
		stream: process.stdout,
		level: 'debug'
	}, {
		level: 'error',
		path: '/home/jngd/bebeer/dev/utils/example.log'
	}, {
        type: 'rotating-file',
        path: '/var/log/foo.log',
        period: '1d',   // daily rotation
        count: 3        // keep 3 back copies
	}]
});
var hola = 'hola';
log.info('hi %s', 'bebeer', 'hola', hola);
log.debug('hi %s', 'bebeer');
log.warn('hi %s', 'bebeer');
log.trace('hi %s', 'bebeer');
log.error('hi %s', 'bebeer');
log.fatal('hi %s', 'bebeer');

/**
 * Example of function to logging
 * @param  {string} argument example of param
 */
function exampleFunction (argument) {
	var i;
	log.info('logger::exampleFunction', 'argument', argument);
}

exampleFunction('hi logger');