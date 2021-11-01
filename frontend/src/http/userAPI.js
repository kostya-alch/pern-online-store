import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const registation = async (email, password) => {
  // функция регистрации юзера
  const { data } = await $host.post('api/user/registration', {
    email,
    password,
    role: 'ADMIN',
  });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  // функция логина юзера
  const { data } = await $host.post('api/user/login', {
    email,
    password,
  });
  return jwt_decode(data.token);
};

export const check = async () => {
  // проверяет, авторизован ли юзер
  const { data } = await $authHost.get('api/user/auth');
  return jwt_decode(data.token);
};
