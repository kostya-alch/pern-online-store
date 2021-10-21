require('dotenv').config(); // библиотечка для считывания .env файлов
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlerMiddleware');

const PORT = process.env.PORT || 5000; // инициализация порта

const app = express();
app.use(cors()); // работаем с cors
app.use(express.json()); // сервер должен читать json
app.use('/api', router);
// универсальный обработчик ошибок middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate(); // устанавливаем соединение с БД
    await sequelize.sync(); // сверяем состояние БД с схемой данных.
    app.listen(PORT, () =>
      console.log(`server started working on port ${PORT}!`)
    ); // старт сервера
  } catch (error) {
    console.log(error);
  }
};
start();
