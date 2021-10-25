const { DataTypes } = require('sequelize');
const Sequelize = require('../db');

// Модель для базы данных
const User = Sequelize.define('user', {
  // Пользователь
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Basket = Sequelize.define('basket', {
  // Корзина интернет-магазина
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = Sequelize.define('basket_device', {
  // Товары, попавшие в корзину
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Device = Sequelize.define('device', {
  // Конкретный товар
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: true },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: true },
});

const Type = Sequelize.define('type', {
  // Тип товара
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = Sequelize.define('brand', {
  // Бренд товара
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = Sequelize.define('rating', {
  // рейтинг( в стадии реализации)
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Device_info = Sequelize.define('device_info', {
  // Информация о девайсе
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const TypeBrand = Sequelize.define('type_brand', {
  // Тип бренда
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// Связи в таблицах

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(Device_info, { as: 'info' });
Device_info.belongsTo(Device);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand,
  Device_info,
};
