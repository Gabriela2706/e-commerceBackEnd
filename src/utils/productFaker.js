import { faker } from "@faker-js/faker";

export default function productsFaker() {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    code: faker.commerce.isbn(),
    stock: faker.number.int(100),
    category: faker.commerce.productAdjective(),
    _id: faker.database.mongodbObjectId(),
  };
}
