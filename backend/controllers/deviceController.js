const uuid = require('uuid');
const path = require('path');
const { Device, Device_info } = require('../models/models');
const apiError = require('../Error/apiError');
class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body; // вытаскаем поля из БД
      const { img } = req.files; // работа с сохранением изображения товара
      let fileName = uuid.v4() + '.jpg'; // шаблон для jpg файлов
      img.mv(path.resolve(__dirname, '..', 'static', fileName)); // сохранение в папку static

      if (info) {
        // создание информации о девайсе
        info = JSON.parse(info); // т.к ответ приходит в json, нужно его распарсить
        info.forEach((i) =>
          Device_info.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(device);
    } catch (error) {
      next(apiError.badRequest(error.message)); // обработка ошибки
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.body;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit; // формула постраничного вывода. простая. лучше не придумал
    let devices;

    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset }); // логика поиска товара в бд. возможно, дублирование кода
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId, limit, offset },
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId, limit, offset },
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId, typeId, limit, offset },
      });
    }
    return res.json(devices);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: Device_info, as: 'info' }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
