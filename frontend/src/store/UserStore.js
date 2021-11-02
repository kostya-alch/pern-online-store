import { makeAutoObservable } from 'mobx';
// store для юзера.
export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {};
    makeAutoObservable(this); // теперь mobx следит за изменениями этих переменных и отрисовывает по новой страницу
  }
  setIsAuth(bool) {
    // изменяем переменные с помощью методов класса
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  get isAuth() {
    // вызываются ,если изменились переменные. своего рода оптимизация в mobx
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
