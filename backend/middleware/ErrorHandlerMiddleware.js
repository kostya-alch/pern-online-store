const ApiError = require('../Error/apiError');
// Middleware, чтобы  подхватывать ошибки из класса ApiError
module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Произошла непредвиденная ошибка' });
};
