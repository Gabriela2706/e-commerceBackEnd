//aca recibo la peticion del cliente y envio la respuesta del cliente y tambien van los DTO
export const postCreateTicket = async (req, res) => {
  try {
    //recibo la informacion del body
    //Este llamado se activa al apretar el boton "finalizar compra"
    //con la informacion desestructurada del body, cito el metodo del service
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getTotalPurchase = async (req, res) => {
  try {
    //este llamado se activa con el boton "total"
    //recibe la informacion price del body y los envia como un objeto
    //al service
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
