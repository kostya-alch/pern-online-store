import { makeAutoObservable } from 'mobx';
// store для конкретного товара
export default class UserStore {
  constructor() {
    this._types = [
      // пока что заглушки для удобства верстки
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Стиралки' },
      { id: 4, name: 'Микроволновки' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Dell' },
      { id: 5, name: 'Mac' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12',
        price: 25000,
        rating: 5,
        img: 'https://proprikol.ru/wp-content/uploads/2021/01/krasivye-kartinki-sobak-44.jpg',
      },
    ];
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
