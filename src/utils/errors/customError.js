//Se encarga de lanzar los errores en la ruta
export default class CustomError {
  static createError({
    message = "Error sin identificar",
    cause = "Desconocida",
    name = "Error x",
    code = 1,
  }) {
    const error = new Error(message, { cause });
    (error.name = name), (error.code = code);

    throw error;
  }
}
