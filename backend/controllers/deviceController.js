<<<<<<< HEAD
const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');
const apiError = require('../Error/apiError');
class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(device);
    } catch (error) {
      next(apiError.badRequest(error.message));
    }
=======

class DeviceController {
  async create(req, res) {
     
>>>>>>> 30cf9c040c9f0cd672241d52b66167039184da9e
  }

  async getAll(req, res) {}
  async getOne(req, res) {}
}

module.exports = new DeviceController();
