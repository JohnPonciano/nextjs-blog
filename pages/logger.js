const pino = require('pino')

const logger = pino({
    leve: process.env.NODE_ENV === 'production'?'info':'debug',
});

module.exports.logger = logger;