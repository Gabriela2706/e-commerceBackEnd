import configWinstonDEV from "./../config/loggers/loggersDEV.js";
import configWinstonPROD from "./../config/loggers/loggersPROD.js";

export const errorLoggerDEV = (error, req, res, next) => {
  req.logger = configWinstonDEV;
  req.logger.ERROR(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  return res.status(error.statusCode).json({
    message: error.message,
    response: false,
    from: "Desde el Error Handler Default",
  });
};

export const errorLoggerPROD = (error, req, res, next) => {
  req.logger = configWinstonPROD;
  req.logger.ERROR(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  return res.status(error.statusCode).json({
    message: error.message,
    response: false,
    from: "Desde el Error Handler Default",
  });
};
