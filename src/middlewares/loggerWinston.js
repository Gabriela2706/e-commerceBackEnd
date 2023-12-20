import configWinstonDEV from "./../config/loggers/loggersDEV.js";
import configWinstonPROD from "./../config/loggers/loggersPROD.js";

export const LoggerDEV = (req, res, next) => {
  req.logger = configWinstonDEV;

  req.logger.HTTP(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);

  req.logger.INFO(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);

  return next();
};
export const LoggerPROD = (req, res, next) => {
  req.logger = configWinstonPROD;

  req.logger.HTTP(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);

  req.logger.INFO(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);

  return next();
};
