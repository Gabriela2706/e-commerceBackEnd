import config from "../config/config.js";
export let ProductDao;
switch (config.PERSISTENCE) {
  case "MEMORY":
    const { default: productMemory } = await import("./fs/productMem.js");
    ProductDao = productMemory;
    break;
  case "MONGO":
  default:
    const { default: productMongo } = await import("./mongo/productDB.js");
    ProductDao = productMongo;
    break;
}
