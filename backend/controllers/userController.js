const ApiError = require('../Error/apiError');

ApiError;
class UserController {
  async registration(req, res) {} // метод регистрации юзера

  async login(req, res) {} // метод авторизации юзера

  async check(req, res, next) {
    // метод на проверку авторизации
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID')); // проверка и выброс ошибки
    }
    res.json(id);
  }
}

module.exports = new UserController();
