// Aca va la logica de negocio, los mapeos, etc
export const createTicket = async (data) => {
  try {
    //recibo la data del controller
    //logica listar cada producto del carrito con sus cantidades
    //Sumarle la hora y el dia al ticket y que tenga un id
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
export const totalPurchase = async (price) => {
  try {
    //recibir solo la propiedad price
    //realizar la suma de todos los montos de cada producto
    //devolver el monto total de la compra
  } catch (error) {
    console.log(error.message);
  }
};
