import errors from "./errorDictionary.js";

const errorHandler = (error, req, res, next) => {
  console.log(error.cause);

  switch (error.code) {
    case errors.PRODUCT_ERROR:
      res.status(500).send({ error: true });
      break;
    case errors.ROUTE_ERROR:
      res.status(404).send({ error: true, msg: error.name });
      break;
    case errors.USER_ERROR:
      res.status(500).send({ error: true, msg: error.name });
      break;
    default:
      res.send({ error: true, msg: "error no manejado" });
  }
};

export default errorHandler;
