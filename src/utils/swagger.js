import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "E-COMMERCE TOLEDO GABRIELA ",
      description: "API of E-commerce of Toledo Gabriela",
    },
  },
  apis: [__dirname + "/docs/*yaml"],
};

export default options;
