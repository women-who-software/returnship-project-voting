const winston = require('winston')
const { CLIENT_ORIGIN } = require('./config')

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'info.log' })
  ]
})

if (!['production', 'test'].includes(CLIENT_ORIGIN)) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger