const { Brand } = require('../models/models');
const apiError = require('../Error/apiError');

class BrandController { 
  async create(req, res) { // метод создания конкретного бренда товара
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) { // метод вывода всего товара
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
