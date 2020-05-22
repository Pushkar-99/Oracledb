const winston = require('winston');

// To log incoming requests using Winston
const logger = winston.createLogger({
	transports: [
		new winston.transports.Console({
			level: 'info',
			format : winston.format.combine(winston.format.timestamp(), winston.format.simple())
		})
	]
});

module.exports = logger;