const { CLIENT_ORIGIN } = require('./config');
const logger = require('./logger');

function errorHandler(error, req, res, next) {
  let response;

  if (CLIENT_ORIGIN === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    logger.error(error.message);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
}

module.exports = errorHandler;