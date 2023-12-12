import { createLogger, format, transports, addColors } from "winston";

const { simple, colorize } = format;

const levels = {
  DANGER: 1,
  WARN: 1,
  INFO: 2,
};

const colors = {
  DANGER: "red",
  WARN: "yellow",
  INFO: "blue",
};

addColors(colors);

export default createLogger({
  levels,
  format: colorize(),
  transports: [
    new transports.Console({
      level: "WARN",
      format: simple(),
    }),

    new transports.File({
      level: "DANGER",
      format: simple(),
      filename: "./errorsDanger.log",
    }),
  ],
});
