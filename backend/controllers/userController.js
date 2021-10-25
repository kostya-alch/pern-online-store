const ApiError = require('../Error/apiError');
const bcrypt = require('bcrypt');
const jwtToken = require('jsonwebtoken');
const { User, Basket } = require('../models/models');

const jwtTokenGenerate = (id, email, role) => {
  // функция генеритует jwt токен по новой через 24ч
  return jwtToken.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};
class UserController {
  async registration(req, res, next) {
    // метод регистрации юзера
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest('Неккоретный email или пароль')); // проверка на пустые значения
    }
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(
        ApiError.badRequest('Пользователь с таким email уже существует')
      );
    }
    const hashPassword = await bcrypt.hash(password, 5); //хешируем пароль 5 раз, много не надо
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = jwtTokenGenerate(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    // метод авторизации юзера
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('Пользователь с таким именем не найден'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password); // шифруем пароль в БД
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'));
    }
    const token = jwtTokenGenerate(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = jwtTokenGenerate(req.user.id, req.user.email, req.user.role); // генерация токена по новой из запроса
    return res.json({ token });
  }
}

module.exports = new UserController();
