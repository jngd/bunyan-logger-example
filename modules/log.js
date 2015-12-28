
var bunyan = require('bunyan');

module.exports = {
    logger: undefined,

    init: function initLogger(logfile, period, fileCount, logLevel) {
        this.logger = bunyan.createLogger({
            name: 'bebeer',
            streams: [{
            	type: 'rotating-file',
                path: logfile,
           		period: period,
        		count: fileCount   
            }, {
                stream: process.stdout,
                level: logLevel
            }]
        });
    }
};