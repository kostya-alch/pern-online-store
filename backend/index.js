require('dotenv').config(); // библиотечка для считывания .env файлов
const express = require('express');

const PORT = process.env.PORT || 5000; // инициализация порта

const app = express();

app.listen(PORT, () => console.log(`server started working on port ${PORT}!`)); //  старт сервера
