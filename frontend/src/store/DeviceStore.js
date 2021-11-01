import { makeAutoObservable } from 'mobx';
// store для конкретного товара
export default class UserStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this); // теперь mobx следит за изменениями этих переменных и отрисовывает по новой страницу
  }
  setTypes(types) {
    // изменяем переменные с помощью методов класса
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    // вызываются ,если изменились переменные. своего рода оптимизация в mobx
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
