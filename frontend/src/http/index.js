import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // инстанс для хоста
});
const $authHost = axios.create({
  // инстанс для авторизованных пользователей
  baseURL: process.env.REACT_APP_API_URL,
});

const authIntercepter = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem(`token`)}`; // подставляем автоматом токен с каждому запросу
  return config;
};

$authHost.interceptors.request.use(authIntercepter);

export { $host, $authHost };
