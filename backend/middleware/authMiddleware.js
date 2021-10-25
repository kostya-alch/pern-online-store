const jwt = require('jsonwebtoken');
// middleware для проверки токена авторизации
module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1]; // вытаскиваем токен из заголовков HTTP
    if (!token) {
      res.status(401).json({ message: 'Не авторизован' });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // декодируем, чтобы проверить работу
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Не авторизован' }); // кидаем ошибку
  }
};
