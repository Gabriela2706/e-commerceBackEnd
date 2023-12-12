const errorRoute = (routeEsperada, routeRecibida) => {
  //ruta no encontrada
  return `La ruta solicitada no se encontro o ya no esta disponible, se espera: 
      *http://localhost:8097/${routeEsperada} y se recibio http://localhost:8097/${routeRecibida} `;
};

const errorNewProduct = (product) => {
  return `Una o mas propiedades estan incompletas o no son validas, se espera:
      *title: Debe ser un String y se recibio: ${typeof product.title}
      *price: Debe ser un Number y se recibio: ${typeof product.price}
      *code: Debe ser un String y se recibio: ${typeof product.code}
      *stock: Debe ser un Number y se recibio: ${typeof product.number}
      *category: Debe ser un String y se recibio: ${typeof product.category}`;
};
const errorNewUser = (user) => {
  return `Una o mas propiedades estan incompletas o no son validas, se espera:
  *name: Debe ser un String y se recibio: ${typeof user.name}
  *lastName: Debe ser un String y se recibio: ${typeof user.lastName}
  *email: Debe ser un String y se recibio: ${typeof user.email}
  *age: Debe ser un Number y se recibio: ${typeof user.age}
  *password: Debe ser un String y se recibio: ${typeof user.password}`;
};

const errorTicket = () => {
  //no tiene productos para generar un ticket
};
const errorDTO = () => {
  //la propiedad que se quiere mostrar esta incompleta o no es valida
};

export default (errorDTO,
errorNewProduct,
errorRoute,
errorTicket,
errorNewUser);
