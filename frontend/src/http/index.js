import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://localhost:5000/', // инстанс для хоста
});
const $authHost = axios.create({
  // инстанс для авторизованных пользователей
  baseURL: 'http://localhost:5000/',
});

const authIntercepter = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem(`token`)}`; // подставляем автоматом токен с каждому запросу
  return config;
};

$authHost.interceptors.request.use(authIntercepter);

export { $host, $authHost };
