import { $authHost, $host } from './index';

export const createType = async (type) => {
  // функция создания типа товара
  const { data } = await $authHost.post('api/type', {
    type,
  });
  return data;
};

export const fetchTypes = async () => {
  // функция получения типа товара
  const { data } = await $host.get('api/type');
  return data;
};

export const createBrand = async (brand) => {
  // функция создания бренда товара
  const { data } = await $authHost.post('api/brand', {
    brand,
  });
  return data;
};

export const fetchBrands = async () => {
  // функция получения бренда товара
  const { data } = await $host.get('api/brand');
  return data;
};

export const createDevice = async (device) => {
  // функция создания товара
  const { data } = await $authHost.post('api/device', {
    device,
  });
  return data;
};

export const fetchDevices = async () => {
  // функция получения  товара
  const { data } = await $host.get('api/device');
  return data;
};

export const fetchOneDevices = async (id) => {
  // функция получения  товара
  const { data } = await $host.get('api/device/' + id);
  return data;
};
