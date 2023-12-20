//va a mostrar por consola ERROR / HTTP / INFO

import { createLogger, format, transports, addColors } from "winston";

const { simple, colorize } = format;

const levels = {
  ERROR: 1,
  HTTP: 2,
  INFO: 3,
};

const colors = {
  ERROR: "red",
  HTTP: "blue",
  INFO: "yellow",
};

addColors(colors);

export default createLogger({
  levels,
  format: colorize(),
  transports: [
    new transports.Console({
      level: "ERROR",
      format: simple(),
    }),
  ],
});
