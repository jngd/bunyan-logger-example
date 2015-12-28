var logfile = __dirname + '/log.txt';
var period = '1d';
var fileCount = 3;
var logLevel = 'trace';

var log = require('./modules/log.js').init(logfile, period, fileCount, logLevel),
    mod1 = require('./modules/mod1.js'),
    mod2 = require('./modules/mod2.js');