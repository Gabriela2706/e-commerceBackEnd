//DTO para el back
export default class CartsDTO {
  constructor(cart) {}
}
//DTo para el front
export class Carts {
  constructor(cart) {
    this.user = cart.user;
    this.products = [this.products.product, this.products.quantity];
  }
}
