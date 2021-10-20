require('dotenv').config(); // библиотечка для считывания .env файлов
const express = require('express');
const sequelize = require('./db');

const PORT = process.env.PORT || 5000; // инициализация порта

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate(); // устанавливаем соединение с БД
    await sequelize.sync(); // сверяет состояние БД с схемой данных.
    app.listen(PORT, () =>
      console.log(`server started working on port ${PORT}!`)
    ); //  старт сервера
  } catch (error) {
    console.log(error);
  }
};
start();
