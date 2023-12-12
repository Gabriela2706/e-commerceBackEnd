//FORMULARIO DE LOGIN
function formLogin() {
  const obtencion = document.getElementById("formLogin");

  obtencion.addEventListener("submit", async (event) => {
    //event.preventDefault();
    const info = new FormData(obtencion);
    const data = {};

    info.forEach((valor, llave) => (data[llave] = valor));
    console.log(data);

    const res = await fetch("users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resInfo = await res.json();
    console.log(resInfo);
    if (resInfo.error) {
    }
    localStorage.setItem("accessToken", resInfo.accessToken);
  });
}

//FORMULARIO DE REGISTRO
function formRegister() {
  const obtencionRegistro = document.getElementById("formRegister");

  obtencionRegistro.addEventListener("submit", async (event) => {
    //event.preventDefault();
    const info = new FormData(obtencionRegistro);
    const data = {};

    info.forEach((valor, llave) => (data[llave] = valor));
    console.log(data);

    const res = await fetch("users/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resInfo = await res.json();
    console.log(resInfo);
    if (resInfo.error) {
    }
    localStorage.setItem("accessToken", resInfo.accessToken);
  });
}
