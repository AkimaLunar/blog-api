'use strict'

const winston = require('winston');
const chalk = require('chalk');

const logger = new(winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        // Doesn't work in now.sh
        // new (winston.transports.File)({ filename: 'logger.log' })
    ]
});

module.exports = { logger };