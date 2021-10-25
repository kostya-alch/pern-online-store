class ApiError extends Error {
  // класс для обработки кодов ошибок
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(404, message); // ошибка "не найдено"
  }
  static internal(message) {
    return new ApiError(500, message); // ошибка от сервака
  }
  static forbidden(message) {
    return new ApiError(403, message); // ошибка авторизации или прав юзера
  }
}

module.exports = ApiError;
